import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function DropdownItem({
  as: Component,
  style,
  children,
  className,
  to,
  isActive,
  isDisabled,
  ...rest
}) {
  const BASE_CLASS_NAME = 'dropdown-item';

  const classes = classNames(
    BASE_CLASS_NAME,
    {
      active: isActive && !isDisabled,
      disabled: isDisabled && !isActive,
    },
    className,
  );

  // Basis properties
  const properties = {
    style,
    className: classes,
  };

  // If component type is a link
  if (Component === 'a') {
    properties.href = to;
  }

  // If component type is a button
  if (Component === 'button') {
    properties.type = 'button';
  }

  if (isActive) {
    properties['aria-current'] = isActive;
  }

  return (
    <li>
      <Component {...properties} {...rest}>
        {children}
      </Component>
    </li>
  );
}

DropdownItem.propTypes = {
  /** Change JSX type */
  as: PropTypes.oneOf(['a', 'button']),

  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add children components */
  children: PropTypes.node.isRequired,

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /** Alias for href attribute */
  to: PropTypes.string,

  /** Activate active style */
  isActive: PropTypes.bool,

  /** Activate disabled style */
  isDisabled: PropTypes.bool,
};

DropdownItem.defaultProps = {
  as: 'a',
  style: null,
  className: null,
  to: '#',
  isActive: false,
  isDisabled: false,
};

export default DropdownItem;
