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
   * Add other classes
   */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /**
   * Choose main theme
   */
  theme: PropTypes.oneOf([
    'white',
  ]),

  /**
   * Trigger the JavaScript functionality for closing.
   * Alias for attribute *data-bs-dismiss*
   */
  dismiss: PropTypes.string,

  /**
   * Activate disabled state.
   * Alias for attribute *disabled*
   */
  disabled: PropTypes.bool,

  /**
   * Click event handler
   */
  onClick: PropTypes.func,
};

/**
 * DefaultProps
 */
const defaultProps = {
  style: null,
  className: null,
  theme: null,
  dismiss: null,
  disabled: false,
  onClick: null,
};

/**
 * CloseButton component
 * Basis on Box component
 *
 * @author Sedelkov Egor <sedelkovegor@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 * @link https://getbootstrap.com/docs/5.3/components/close-button
 *
 * Changelog:
 * - Refactoring component [26/05/2023]
 */
export default function CloseButton({
  style,
  className,
  theme,
  dismiss,
  disabled,
  onClick,
  ...rest
}) {
  const BASE_CLASS_NAME = 'btn-close';

  const classes = classNames(
    BASE_CLASS_NAME,
    {
      /**
       * 'btn-close-white'
       */
      [usePrefix(BASE_CLASS_NAME, theme)]: theme,
    },
    className,
  );

  return (
    <Box
      as="button"
      type="button"
      className={classes}
      style={style}
      disabled={disabled}
      data-bs-dismiss={dismiss}
      onClick={onClick}
      {...rest}
    />
  );
}

CloseButton.propTypes = propTypes;
CloseButton.defaultProps = defaultProps;
