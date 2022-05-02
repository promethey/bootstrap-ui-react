import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Button(props) {
  const {
    as: Component,
    style,
    children,
    className,
    to,
    type,
    theme,
    isOutline,
    size,
    isDisabled,
    isBlock,
    isToggle,
    isActive,
    onClick,
    ...rest
  } = props;

  const BASE_CLASS_NAME = 'btn';

  const classes = classNames(
    BASE_CLASS_NAME,
    `${BASE_CLASS_NAME}${isOutline ? '-outline' : ''}-${theme}`,
    {
      disabled: isDisabled && Component !== 'button',
      'w-100': isBlock,
      [`btn-${size}`]: size,
      active: isActive,
    },
    className,
  );

  const baseProperties = {
    style,
    className: classes,
    onClick,
    ...rest,
  };

  /** <button /> props */
  const buttonProperties = {
    ...baseProperties,
    type,
    disabled: isDisabled,
  };

  /** <a /> props */
  const linkProperties = {
    ...baseProperties,
    href: to,
    role: 'button',
  };

  /** <input /> props */
  const inputProps = {
    ...baseProperties,
    type,
    value: children,
  };

  if (isToggle) {
    buttonProperties['data-bs-toggle'] = 'button';
    buttonProperties.autoComplete = 'off';

    linkProperties['data-bs-toggle'] = 'button';
  }

  if (isActive) {
    buttonProperties['aria-pressed'] = true;

    linkProperties['aria-pressed'] = true;
  }

  if (isDisabled) {
    linkProperties['aria-disabled'] = true;
  }

  if (Component === 'button') {
    return (
      <button {...buttonProperties}>
        {children}
      </button>
    );
  }

  if (Component === 'a') {
    return (
      <a {...linkProperties}>
        {children}
      </a>
    );
  }

  if (Component === 'input') {
    return (
      <input {...inputProps} />
    );
  }
}

Button.propTypes = {
  /** Component JSX type */
  as: PropTypes.oneOf([
    'button',
    'a',
    'input',
  ]),

  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add label for button */
  children: PropTypes.node.isRequired,

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /** Alias for attribute *href* */
  to: PropTypes.string,

  /** Alias for attribute *type* */
  type: PropTypes.string,

  /** Choose main theme */
  theme: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
    'link',
  ]),

  /** Activate outline style */
  isOutline: PropTypes.bool,

  /** Change button size */
  size: PropTypes.oneOf([
    'sm',
    'lg',
  ]),

  /** Activate disabled state */
  isDisabled: PropTypes.bool,

  /** Set width 100% */
  isBlock: PropTypes.bool,

  /** Add toggle state */
  isToggle: PropTypes.bool,

  /** Add active style */
  isActive: PropTypes.bool,

  /** Click event handler */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  as: 'button',
  style: null,
  className: null,
  to: '#',
  type: 'button',
  theme: 'primary',
  isOutline: false,
  size: null,
  isDisabled: false,
  isBlock: false,
  isToggle: false,
  isActive: false,
  onClick: null,
};

export default Button;
