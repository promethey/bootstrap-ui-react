import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from '../../scripts/prefix';
import Button from '../Button';

/**
 * PropTypes
 */
const propTypes = {
  /**
   * Add other styles
   */
  style: PropTypes.shape({}),

  /**
   * Add dropdown label
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
   * Alias for id attribute
   */
  id: PropTypes.string,

  /**
   * Activate split design
   */
  split: PropTypes.bool,

  /**
   * Add offset settings
   */
  offset: PropTypes.arrayOf(PropTypes.number),

  /**
   * Add reference setting
   */
  reference: PropTypes.oneOf([
    'toggle',
    'parent',
  ]),

  /**
   * Activate auto close setting
   */
  autoClose: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf([
      'inside',
      'outside',
    ]),
  ]),
};

/**
 * DefaultProps
 */
const defaultProps = {
  style: null,
  className: null,
  id: null,
  split: false,
  offset: null,
  reference: null,
  autoClose: null,
};

/**
 * DropdownToggle is children component of Dropdown
 * Basis on Button component
 */
export default function DropdownToggle({
  style,
  children,
  className,
  id,
  split,
  offset,
  reference,
  autoClose,
  ...rest
}) {
  const BASE_CLASS_NAME = 'dropdown-toggle';

  const classes = classNames(
    BASE_CLASS_NAME,
    {
      [usePrefix(BASE_CLASS_NAME, 'split')]: split,
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

  if (autoClose) {
    properties['data-bs-auto-close'] = autoClose;
  }

  return (
    <Button {...properties} {...rest}>
      {children}
    </Button>
  );
}

DropdownToggle.propTypes = propTypes;
DropdownToggle.defaultProps = defaultProps;
