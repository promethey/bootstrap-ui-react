import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Flex from 'components/Flex';
import { usePrefix } from 'helpers/prefix';
import NavbarBrand from './NavbarBrand';
import NavbarToggler from './NavbarToggler';
import NavbarCollapse from './NavbarCollapse';
import NavbarNav from './NavbarNav';
import NavbarText from './NavbarText';

/**
 * PropTypes
*/
const propTypes = {
  /** Add children components */
  children: PropTypes.node.isRequired,

  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add other classnames */
  className: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
  ]),

  /** Change responsive collapsing  */
  expand: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl']),

  /** Change navbar placement */
  placement: PropTypes.oneOf([
    'fixed-top',
    'fixed-bottom',
    'sticky-top',
    'sticky-bottom',
  ]),
};

/**
 * DefaultProps
 */
const defaultProps = {
  style: null,
  className: null,
  expand: null,
  placement: null,
};

/**
 * Navbar component
 * Basis on Flex component
 *
 * @author Sedelkov Egor <sedelkovegor@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 * @see [Bootstrap]{@link https://getbootstrap.com/docs/5.3/components/navbar}
 */
function Navbar({
  children,
  style,
  expand,
  placement,
  className,
  ...rest
}) {
  const BASE_CLASS_NAME = 'navbar';

  const classes = classNames(
    BASE_CLASS_NAME,
    {
      [usePrefix(BASE_CLASS_NAME, 'expand', expand)]: expand,
      [placement]: placement,
    },
    className,
  );

  return (
    <Flex className={classes} style={style} {...rest}>
      {children}
    </Flex>
  );
}

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

Navbar.Brand = NavbarBrand;
Navbar.Toggler = NavbarToggler;
Navbar.Collapse = NavbarCollapse;
Navbar.Nav = NavbarNav;
Navbar.Text = NavbarText;

export default Navbar;
