import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from '../Box';
import { usePrefix } from '../prefix';
import NavItem from './NavItem';
import NavLink from './NavLink';

function Nav({
  as: Component,
  children,
  style,
  className,
  design,
  align,
  prefix,
  ...rest
}) {
  const BASE_CLASS_NAME = 'nav';

  const classes = classNames(
    {
      [BASE_CLASS_NAME]: !prefix,
      [usePrefix(prefix, BASE_CLASS_NAME)]: prefix,
      [usePrefix(BASE_CLASS_NAME, design)]: design,
      [usePrefix(BASE_CLASS_NAME, align)]: align,
    },
    className,
  );

  return (
    <Box as="ul" className={classes} style={style} {...rest}>
      {children}
    </Box>
  );
}

Nav.propTypes = {
  /** Change component type */
  as: PropTypes.oneOf(['ul', 'nav']),

  /** Add nav items */
  children: PropTypes.node.isRequired,

  /** Change styles */
  style: PropTypes.shape({}),

  /** Add other classnames */
  className: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
  ]),

  /** Change design style */
  design: PropTypes.oneOf([
    'tabs',
    'pills',
    'underline',
  ]),

  /** Fill or justified alignment content */
  align: PropTypes.oneOf(['fill', 'justified']),

  /** Add custom prefix */
  prefix: PropTypes.string,
};

Nav.defaultProps = {
  as: 'ul',
  style: null,
  className: null,
  design: null,
  align: null,
  prefix: null,
};

Nav.Item = NavItem;
Nav.Link = NavLink;

export default Nav;
