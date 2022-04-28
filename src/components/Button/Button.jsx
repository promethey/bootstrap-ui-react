import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Button(props) {
  const {
    style, children, className, theme, outline, size,
    isDisabled, isBlock, isActive, onClick,
  } = props;

  const classes = classNames(
    'btn',
    `btn${outline ? '-outline' : ''}-${theme}`,
    {
      'w-100': isBlock,
      [`btn-${size}`]: size,
      active: isActive,
    },
    className,
  );

  return (
    <button
      type="button"
      className={classes}
      style={style}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export const ButtonThemes = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
  'link',
];

export const ButtonSizes = [
  'sm',
  'lg',
];

Button.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add label for button */
  children: PropTypes.node.isRequired,

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /** Choose main theme */
  theme: PropTypes.oneOf(ButtonThemes),

  /** Activate outline style */
  outline: PropTypes.bool,

  /** Change button size */
  size: PropTypes.oneOf(ButtonSizes),

  /** Activate disabled state */
  isDisabled: PropTypes.bool,

  /** Button width 100% */
  isBlock: PropTypes.bool,

  /** Add active style */
  isActive: PropTypes.bool,

  /** Button click handler */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  style: null,
  className: null,
  theme: 'primary',
  outline: false,
  size: null,
  isDisabled: false,
  isBlock: false,
  isActive: false,
  onClick: null,
};

export default Button;
