import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Flex from '../Flex';

/**
 * PropTypes
 */
const propTypes = {
  /** Change component type */
  as: PropTypes.oneOf([
    'a',
    'span',
    'div',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'strong',
  ]),

  /** Add brand text content */
  children: PropTypes.node.isRequired,

  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add other classnames */
  className: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.string,
    PropTypes.array,
  ]),

  /** Alias for href */
  to: PropTypes.string,
};

/**
 * DefaultProps
 */
const defaultProps = {
  as: 'a',
  style: null,
  className: null,
  to: '#',
};

/**
 * NavbarBrand component
 * Basis on Flex component
 *
 * @author Sedelkov Egor <sedelkovegor@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 * @see [Bootstrap]{@link https://getbootstrap.com/docs/5.3/components/navbar}
 */
function NavbarBrand({
  as: Component,
  children,
  style,
  to,
  className,
  ...rest
}) {
  const BASE_CLASS_NAME = 'navbar-brand';

  const classes = classNames(BASE_CLASS_NAME, className);

  return (
    <Flex
      href={to}
      as={Component}
      className={classes}
      style={style}
      {...rest}
    >
      {children}
    </Flex>
  );
}

NavbarBrand.propTypes = propTypes;
NavbarBrand.defaultProps = defaultProps;

export default NavbarBrand;
