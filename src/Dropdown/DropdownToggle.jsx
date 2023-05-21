import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from '../prefix';
import Button from '../Button';

function DropdownToggle(props) {
  const {
    style,
    children,
    className,
    id,
    isSplit,
    offset,
    reference,
    isAutoClose,
    ...rest
  } = props;

  const BASE_CLASS_NAME = 'dropdown-toggle';

  const classes = classNames(
    BASE_CLASS_NAME,
    {
      [usePrefix(BASE_CLASS_NAME, 'split')]: isSplit,
    },
    className,
  );

  /** Base properties */
  const properties = {
    style,
    className: classes,
    'data-bs-toggle': 'dropdown',
    'aria-expanded': false,
  };

  if (id) {
    properties.id = id;
  }

  if (offset && offset.length === 2) {
    properties['data-bs-offset'] = offset;
  }

  if (reference) {
    properties['data-bs-reference'] = 'parent';
  }

  if (isAutoClose) {
    properties['data-bs-auto-close'] = isAutoClose;
  }

  return (
    <Button {...properties} {...rest}>
      {children}
    </Button>
  );
}

DropdownToggle.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add dropdown label */
  children: PropTypes.node.isRequired,

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /** Alias for id attribute */
  id: PropTypes.string,

  /** Activate split design */
  isSplit: PropTypes.bool,

  /** Add offset settings */
  offset: PropTypes.arrayOf(PropTypes.number),

  /** Add reference setting */
  reference: PropTypes.oneOf([
    'toggle',
    'parent',
  ]),

  /** Activate auto close setting */
  isAutoClose: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf([
      'inside',
      'outside',
    ]),
  ]),
};

DropdownToggle.defaultProps = {
  style: null,
  className: null,
  id: null,
  isSplit: false,
  offset: null,
  reference: null,
  isAutoClose: null,
};

export default DropdownToggle;
