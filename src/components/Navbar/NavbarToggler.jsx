import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Flex from 'components/Flex';

/**
 * PropTypes
 */
const propTypes = {
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
 * NavbarToggler component
 * Basis on Flex component
 *
 * @author Sedelkov Egor <sedelkovegor@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 * @see [Bootstrap]{@link https://getbootstrap.com/docs/5.3/components/navbar}
 */
function NavbarToggler({
  style,
  className,
  ...rest
}) {
  const BASE_CLASS_NAME = 'navbar-toggler';

  const classes = classNames(
    BASE_CLASS_NAME,
    className,
  );

  return (
    <Flex as="button" className={classes} style={style} {...rest}>
      <span className="navbar-toggler-icon" />
    </Flex>
  );
}

NavbarToggler.propTypes = propTypes;
NavbarToggler.defaultProps = defaultProps;

export default NavbarToggler;
