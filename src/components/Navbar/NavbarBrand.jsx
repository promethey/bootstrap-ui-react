import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from 'components/Box';

function NavbarBrand({
  as: Component, children, style, to, className, ...rest
}) {
  const BASE_CLASS_NAME = 'navbar-brand';

  const classes = classNames(BASE_CLASS_NAME, className);

  return (
    <Box href={to} as="a" className={classes} style={style} {...rest}>
      {children}
    </Box>
  );
}

NavbarBrand.propTypes = {
  /** Change component type */
  as: PropTypes.oneOf(['a']),

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

NavbarBrand.defaultProps = {
  as: 'a',
  style: null,
  className: null,
  to: '#',
};

export default NavbarBrand;
