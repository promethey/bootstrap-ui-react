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
   * Change component type
   */
  as: PropTypes.oneOf([
    'button',
    'a',
    'input',
  ]),

  /**
   * Add other styles
   */
  style: PropTypes.shape({}),

  /**
   * Add label for button
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
   * Alias for attribute href
   */
  to: PropTypes.string,

  /**
   * Alias for attribute type
   */
  type: PropTypes.string,

  /**
   * Choose main theme
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
    'link',
  ]),

  /**
   * Activate outline style
   */
  outline: PropTypes.bool,

  /**
   * Change button size
   */
  size: PropTypes.oneOf([
    'sm',
    'lg',
  ]),

  /**
   * Activate disabled state
   */
  disabled: PropTypes.bool,

  /**
   * Add active style
   */
  pressed: PropTypes.bool,

  /**
   * Make clickable by
   * stretching a nested link
   */
  stretched: PropTypes.bool,

  /**
   * Click event handler
   */
  onClick: PropTypes.func,
};

/**
 * DefaultProps
 */
export const defaultProps = {
  as: 'button',
  style: null,
  className: null,
  to: '#',
  type: 'button',
  theme: 'primary',
  outline: false,
  size: null,
  disabled: false,
  pressed: false,
  stretched: false,
  onClick: null,
};

/**
 * Button component
 * Basis on Box component
 *
 * @author Sedelkov Egor <sedelkovegor@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 * @link https://getbootstrap.com/docs/5.3/components/buttons
 *
 * Changelog:
 * - Refactoring component [21/05/2023]
 */
export default function Button({
  as: ComponentType,
  style,
  children,
  className,
  to,
  type,
  theme,
  outline,
  size,
  disabled,
  pressed,
  stretched,
  onClick,
  ...rest
}) {
  const BASE_CLASS_NAME = 'btn';

  const classes = classNames(
    BASE_CLASS_NAME,
    {
      [usePrefix(BASE_CLASS_NAME, outline ? 'outline' : null, theme)]: theme,
      disabled: disabled && ComponentType !== 'button',
      [usePrefix(BASE_CLASS_NAME, size)]: size,
      active: pressed,
      [usePrefix('stretched', 'link')]: stretched && ComponentType === 'a',
    },
    className,
  );

  /**
   * Base properties
   */
  const baseProperties = {
    style,
    className: classes,
    onClick,
    ...rest,
  };

  /**
   * Only button properties
   */
  const buttonProperties = {
    ...baseProperties,
    type,
    disabled,
  };

  /**
   * Only link properties
   */
  const linkProperties = {
    ...baseProperties,
    href: to || '#',
    role: 'button',
  };

  /**
   * Only input properties
   */
  const inputProps = {
    ...baseProperties,
    type,
    value: children,
  };

  if (pressed) {
    buttonProperties['aria-pressed'] = true;
    linkProperties['aria-pressed'] = true;
  }

  if (disabled) {
    linkProperties['aria-disabled'] = true;
  }

  /**
   * Render as link
   */
  if (ComponentType === 'a') {
    return (
      <Box as="a" {...linkProperties}>
        {children}
      </Box>
    );
  }

  /**
   * Render as input
   */
  if (ComponentType === 'input') {
    return (
      <Box as="input" {...inputProps} />
    );
  }

  /**
   * Render as button
   * (default)
   */
  return (
    <Box as="button" {...buttonProperties}>
      {children}
    </Box>
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
