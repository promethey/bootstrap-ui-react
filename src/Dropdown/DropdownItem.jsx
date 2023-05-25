import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from '../Box';

/**
 * PropTypes
 */
const propTypes = {
  /**
   * Change component type
   */
  as: PropTypes.oneOf([
    'a',
    'button',
  ]),

  /**
   * Add other styles
   */
  style: PropTypes.shape({}),

  /**
   * Add children components
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
   * Alias for href attribute
   */
  to: PropTypes.string,

  /**
   * Activate active style
   */
  active: PropTypes.bool,

  /**
   * Activate disabled style
   */
  disabled: PropTypes.bool,
};

/**
 * DefaultProps
 */
const defaultProps = {
  as: 'a',
  style: null,
  className: null,
  to: '#',
  active: false,
  disabled: false,
};

/**
 * DropdownItem is children component of Dropdown
 * Basis on Box component
 */
export default function DropdownItem({
  as: Component,
  style,
  children,
  className,
  to,
  active,
  disabled,
  ...rest
}) {
  const BASE_CLASS_NAME = 'dropdown-item';

  const classes = classNames(
    BASE_CLASS_NAME,
    {
      active: active && !disabled,
      disabled: disabled && !active,
    },
    className,
  );

  // Basis properties
  const properties = {
    style,
    className: classes,
  };

  /**
   * Add props for link
   */
  if (Component === 'a') {
    properties.href = to;
  }

  /**
   * Add props for button
   */
  if (Component === 'button') {
    properties.type = 'button';
  }

  if (active) {
    properties['aria-current'] = active;
  }

  return (
    <Box>
      <Box as={Component} {...properties} {...rest}>
        {children}
      </Box>
    </Box>
  );
}

DropdownItem.propTypes = propTypes;
DropdownItem.defaultProps = defaultProps;
