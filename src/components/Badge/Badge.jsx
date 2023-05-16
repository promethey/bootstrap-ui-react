import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from 'components/Box';

/**
 * PropTypes
 */
const propTypes = {
  /**
   * Add other styles
   */
  style: PropTypes.shape({}),

  /**
   * Add label for badge
   */
  children: PropTypes.node.isRequired,

  /**
   * Add other classes
   */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /**
   * Choose background color
   */
  bgColor: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ]),

  /**
   * Choose text color
   */
  textColor: PropTypes.oneOf([
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
  ]),
};

/**
 * DefaultProps
 */
const defaultProps = {
  style: null,
  className: null,
  bgColor: 'primary',
  textColor: 'white',
};

/**
 * Badge component
 * Basis on Box component
 *
 * @author Sedelkov Egor <sedelkovegor@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 * @link https://getbootstrap.com/docs/5.3/components/badge
 *
 * Changelog:
 */
function Badge(props) {
  const {
    style,
    children,
    className,
    bgColor,
    textColor,
    ...rest
  } = props;

  const BASE_CLASS_NAME = 'badge';

  const classes = classNames(
    BASE_CLASS_NAME,
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

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

export default Badge;
