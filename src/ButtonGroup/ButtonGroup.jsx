import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from '../prefix';
import Box from '../Box';

/**
 * PropTypes
 */
const propTypes = {
  /**
   * Add other styles
   */
  style: PropTypes.shape({}),

  /**
   * Add button components
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
   * Change size
   */
  size: PropTypes.oneOf(['sm', 'lg']),

  /**
   * Activate vertical style
   */
  vertical: PropTypes.bool,

  /**
   * Change dropdown directions
   */
  drop: PropTypes.oneOf([
    'up',
    'end',
    'start',
  ]),
};

/**
 * DefaultProps
 */
const defaultProps = {
  style: null,
  className: null,
  size: null,
  vertical: false,
  drop: null,
};

/**
 * ButtonGroup component
 * Basis on Box component
 *
 * @author Sedelkov Egor <sedelkovegor@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 * @link https://getbootstrap.com/docs/5.3/components/button-group
 *
 * Changelog:
 * - Refactoring component [21/05/2023]
 */
export default function ButtonGroup({
  style,
  children,
  className,
  size,
  vertical,
  drop,
  ...rest
}) {
  const BASE_CLASS_NAME = 'btn-group';

  const classes = classNames(
    /**
     * btn-group
     * btn-group-vertical
     */
    usePrefix(BASE_CLASS_NAME, vertical ? 'vertical' : null),
    {
      /**
       * btn-group-lg (large size)
       * btn-group (original size)
       * btn-group-sm (small size)
       */
      [usePrefix(BASE_CLASS_NAME, size)]: size,
      /**
       * Drop position classname
       */
      [`drop${drop}`]: drop,
    },
    className,
  );

  return (
    <Box
      style={style}
      className={classes}
      role="group"
      {...rest}
    >
      {children}
    </Box>
  );
}

ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;
