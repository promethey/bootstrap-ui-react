import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Collapse from 'components/Collapse';

function NavbarCollapse({
  children, style, className, ...rest
}) {
  const BASE_CLASS_NAME = 'navbar-collapse';

  const classes = classNames(BASE_CLASS_NAME, className);

  return (
    <Collapse className={classes} style={style} {...rest}>
      {children}
    </Collapse>
  );
}

NavbarCollapse.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({}),
  className: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.string,
    PropTypes.array,
  ]),
};

NavbarCollapse.defaultProps = {
  style: null,
  className: null,
};

export default NavbarCollapse;
