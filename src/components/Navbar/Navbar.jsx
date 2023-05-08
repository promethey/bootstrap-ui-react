import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from 'components/Box';
import { usePrefix } from 'helpers/prefix';
import NavbarBrand from './NavbarBrand';
import NavbarToggler from './NavbarToggler';
import NavbarCollapse from './NavbarCollapse';
import NavbarNav from './NavbarNav';

function Navbar({
  children, style, expand, className, ...rest
}) {
  const BASE_CLASS_NAME = 'navbar';

  const classes = classNames(
    BASE_CLASS_NAME,
    {
      [usePrefix(BASE_CLASS_NAME, 'expand', expand)]: expand,
    },
    className,
  );

  return (
    <Box className={classes} style={style} {...rest}>
      {children}
    </Box>
  );
}

Navbar.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({}),
  className: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
  ]),
  expand: PropTypes.oneOf('sm', 'md', 'lg', 'xl', 'xxl'),
};

Navbar.defaultProps = {
  style: null,
  className: null,
  expand: null,
};

Navbar.Brand = NavbarBrand;
Navbar.Toggler = NavbarToggler;
Navbar.Collapse = NavbarCollapse;
Navbar.Nav = NavbarNav;

export default Navbar;
