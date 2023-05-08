import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from 'components/Box';

function NavLink({
  as: Component,
  children,
  style,
  className,
  to,
  active,
  disabled,
  ...rest
}) {
  const BASE_CLASS_NAME = 'nav-link';

  const classes = classNames(
    BASE_CLASS_NAME,
    { active, disabled },
    className,
  );

  return (
    <Box
      href={to}
      as={Component}
      className={classes}
      style={style}
      {...rest}
    >
      {children}
    </Box>
  );
}

NavLink.propTypes = {
  /** Change component type */
  as: PropTypes.oneOf(['a']),

  /** Add link text content */
  children: PropTypes.node.isRequired,

  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add other classnames */
  className: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
  ]),

  /** Alias for href */
  to: PropTypes.string,

  /** Add active state */
  active: PropTypes.bool,

  /** Add disabled state */
  disabled: PropTypes.bool,
};

NavLink.defaultProps = {
  as: 'a',
  style: null,
  className: null,
  to: '#',
  active: false,
  disabled: false,
};

export default NavLink;
