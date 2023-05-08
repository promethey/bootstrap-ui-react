import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from 'components/Box';

function NavItem({
  as: Component, children, style, className, ...rest
}) {
  const BASE_CLASS_NAME = 'nav-item';

  const classes = classNames(BASE_CLASS_NAME, className);

  return (
    <Box as={Component} className={classes} style={style} {...rest}>
      {children}
    </Box>
  );
}

NavItem.propTypes = {
  as: PropTypes.oneOf(['li']),
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({}),
  className: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
  ]),
};

NavItem.defaultProps = {
  as: 'li',
  style: null,
  className: null,
};

export default NavItem;
