import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Nav from 'components/Nav';

/**
 * PropTypes
 */
const propTypes = {
  /**
   * Add nav items
   */
  children: PropTypes.node.isRequired,

  /**
   * Add other styles
   */
  style: PropTypes.shape({}),

  /**
   * Add other classnames
   */
  className: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
  ]),
};

/**
 * DefaultProps
 */
const defaultProps = {
  style: null,
  className: null,
};

/**
 * NavbarNav component
 * Basic on Nav component
 *
 * @author Sedelkov Egor <sedelkovegor@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 * @see [Bootstrap]{@link https://getbootstrap.com/docs/5.3/components/navbar}
 */
function NavbarNav({
  children,
  style,
  className,
  ...rest
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

NavbarNav.propTypes = propTypes;
NavbarNav.defaultProps = defaultProps;

export default NavbarNav;
