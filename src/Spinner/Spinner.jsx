import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from '../../scripts/prefix';
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
   * Add other classes
   */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /**
   * Choose color theme
   */
  theme: PropTypes.oneOf([
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
   * Change style type
   */
  type: PropTypes.oneOf(['border', 'grow']),

  /**
   * Activate small size
   */
  small: PropTypes.bool,
};

/**
 * DefaultProps
 */
const defaultProps = {
  style: null,
  className: null,
  theme: null,
  type: 'border',
  small: false,
};

/**
 * Spinner component
 * Basis on Box component
 *
 * @author Sedelkov Egor <sedelkovegor@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 * @link https://getbootstrap.com/docs/5.3/components/spinners
 *
 * Changelog:
 * - Refactoring component [23/05/2023]
 */
export function Spinner({
  style,
  className,
  theme,
  type,
  small,
  ...rest
}) {
  const BASE_CLASS_NAME = 'spinner';

  const classes = classNames(
    usePrefix(BASE_CLASS_NAME, type),
    {
      [usePrefix('text', theme)]: theme,
      [usePrefix(BASE_CLASS_NAME, type, 'sm')]: small,
    },
    className,
  );

  return (
    <Box className={classes} style={style} role="status" {...rest}>
      <Box visually={false}>
        Loading...
      </Box>
    </Box>
  );
}

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

export default Spinner;
