import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Collapse from 'components/Collapse';

/**
 * PropTypes
 */
const propTypes = {
  /**
   * Add children components
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
    PropTypes.shape({}),
    PropTypes.string,
    PropTypes.array,
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
 * NavbarCollapse component
 * Basis on Collapse component
 *
 * @author Sedelkov Egor <sedelkovegor@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 * @see [Bootstrap]{@link https://getbootstrap.com/docs/5.3/components/navbar}
 */
function NavbarCollapse({
  children,
  style,
  className,
  ...rest
}) {
  const BASE_CLASS_NAME = 'navbar-collapse';

  const classes = classNames(BASE_CLASS_NAME, className);

  return (
    <Collapse className={classes} style={style} {...rest}>
      {children}
    </Collapse>
  );
}

NavbarCollapse.propTypes = propTypes;
NavbarCollapse.defaultProps = defaultProps;

export default NavbarCollapse;
