import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from 'helpers/prefix';

function ListGroupItem(props) {
  const {
    as: Component,
    style,
    children,
    className,
    theme,
    isActive,
    isDisabled,
    to,
    onClick,
    ...rest
  } = props;

  const BASE_CLASS_NAME = 'list-group-item';

  const classes = classNames(
    BASE_CLASS_NAME,
    {
      [usePrefix(BASE_CLASS_NAME, theme)]: theme,
      [usePrefix(BASE_CLASS_NAME, 'action')]: Component !== 'li',
      active: isActive,
      disabled: isDisabled,
    },
    className,
  );

  /** Base properties */
  const properties = {
    className: classes,
    style,
  };

  if (isActive) {
    properties['aria-current'] = true;
  }

  if (Component === 'a') {
    properties.href = to;
  }

  if (Component === 'button') {
    properties.type = 'button';
    properties.disabled = isDisabled;
  }

  if (Component !== 'li') {
    properties.onClick = onClick;
  }

  return (
    <Component {...properties} {...rest}>
      {children}
    </Component>
  );
}

ListGroupItem.propTypes = {
  /** Component JSX type */
  as: PropTypes.oneOf(['li', 'a', 'button', 'label']),

  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add label */
  children: PropTypes.node.isRequired,

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /** Change theme */
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

  /** Activate active state and style */
  isActive: PropTypes.bool,

  /** Activate disabled state and style */
  isDisabled: PropTypes.bool,

  /** Alias for *href* attribute */
  to: PropTypes.string,

  /** Click event handler */
  onClick: PropTypes.func,
};

ListGroupItem.defaultProps = {
  as: 'li',
  style: null,
  className: null,
  theme: null,
  isActive: false,
  isDisabled: false,
  to: '#',
  onClick: null,
};

export default ListGroupItem;
