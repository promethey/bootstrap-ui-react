import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Nav from 'components/Nav';

function NavbarNav({
  children, style, className, ...rest
}) {
  return (
    <Nav
      prefix="navbar"
      className={classNames(className)}
      style={style}
      {...rest}
    >
      {children}
    </Nav>
  );
}

NavbarNav.propTypes = {
  /** Add nav items */
  children: PropTypes.node.isRequired,

  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add other classnames */
  className: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
  ]),
};

NavbarNav.defaultProps = {
  style: null,
  className: null,
};

export default NavbarNav;
