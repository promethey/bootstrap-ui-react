import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from 'components/Box';

function Badge(props) {
  const {
    style,
    children,
    className,
    bgColor,
    textColor,
    ...rest
  } = props;

  const BASE_CLASSNAME = 'badge';

  const classes = classNames(
    BASE_CLASSNAME,
    className,
  );

  return (
    <Box
      className={classes}
      style={style}
      bgColor={bgColor}
      textColor={textColor}
      {...rest}
    >
      {children}
    </Box>
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
};

Badge.defaultProps = {
  style: null,
  className: null,
  bgColor: 'primary',
  textColor: 'white',
};

export default Badge;
