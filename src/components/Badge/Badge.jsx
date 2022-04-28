import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Badge(props) {
  const {
    style, children, className, bgColor, textColor, isRounded,
  } = props;

  const classes = classNames(
    'badge',
    `bg-${bgColor}`,
    `text-${textColor}`,
    { 'rounded-pill': isRounded },
    className,
  );

  return (
    <span className={classes} style={style}>
      {children}
    </span>
  );
}

export const BadgeBgColors = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
];

export const BadgeTextColors = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
  'body',
  'muted',
  'white',
  'black-50',
  'white-50',
];

Badge.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add label for badge  */
  children: PropTypes.node.isRequired,

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /** Choose background color */
  bgColor: PropTypes.oneOf(BadgeBgColors),

  /** Choose text color */
  textColor: PropTypes.oneOf(BadgeTextColors),

  /** Activate rounded pill style */
  isRounded: PropTypes.bool,
};

Badge.defaultProps = {
  style: null,
  className: null,
  bgColor: 'primary',
  textColor: 'white',
  isRounded: false,
};

export default Badge;
