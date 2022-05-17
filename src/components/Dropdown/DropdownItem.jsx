import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function DropdownItem(props) {
  const {
    as: Component,
    style,
    children,
    className,
    to,
    isActive,
    isDisabled,
    ...rest
  } = props;

  const classes = classNames(
    'dropdown-item',
    {
      active: isActive && !isDisabled,
      disabled: isDisabled && !isActive,
    },
    className,
  );

  const properties = {
    style,
    className: classes,
  };

  if (Component === 'a') {
    properties.href = to;
  }

  if (isActive) {
    properties['aria-current'] = isActive;
  }

  if (Component === 'button') {
    properties.type = 'button';
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
  as: PropTypes.oneOf(['a', 'button']),
  style: PropTypes.shape({}),
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  to: PropTypes.string,
  isActive: PropTypes.bool,
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
