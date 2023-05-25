import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from '../prefix';
import Flex from '../Flex';
import { getBootstrapClassNames } from '../convert';

/**
 * PropTypes
 */
const propTypes = {
  /**
   * Add other styles
   */
  style: PropTypes.shape({}),

  /**
   * Add dropdown items
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
   * Activate dark style
   */
  dark: PropTypes.bool,

  /**
   * Change alignement
   */
  align: PropTypes.oneOf('start', 'end'),

  /**
   * Change text color
   */
  textColor: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
    'body',
    'muted',
    'white',
    'black-50',
    'white-50',
    'reset',
  ]),
};

/**
 * DefaultProps
 */
const defaultProps = {
  style: null,
  className: null,
  dark: false,
  align: false,
  textColor: null,
};

/**
 * DropdownMenu is children component of Dropdown
 * Basis on Flex component
 */
export default function DropdownMenu({
  style,
  children,
  className,
  dark,
  align,
  textColor,
  ...rest
}) {
  const BASE_CLASS_NAME = 'dropdown-menu';

  const classes = classNames(
    BASE_CLASS_NAME,
    {
      /**
       * 'dropdown-menu-dark'
       */
      [usePrefix(BASE_CLASS_NAME, 'dark')]: dark,
      /**
       * 'text-primary' (for example)
       */
      [usePrefix('text', textColor)]: textColor,
    },
    getBootstrapClassNames(BASE_CLASS_NAME, align),
    className,
  );

  return (
    <Flex
      noflex
      style={style}
      className={classes}
      {...rest}
    >
      {children}
    </Flex>
  );
}

DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;
