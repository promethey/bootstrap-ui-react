import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button';
import { usePrefix } from '../../helpers/prefix';

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
  style: PropTypes.shape({}),
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  id: PropTypes.string,
  isSplit: PropTypes.bool,
  offset: PropTypes.arrayOf(PropTypes.number),
  reference: PropTypes.oneOf([
    'toggle',
    'parent',
  ]),
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
