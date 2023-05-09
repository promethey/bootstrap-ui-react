import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Text from 'components/Text';

/**
 * PropTypes
 */
const propTypes = {
  /**
   * Change component type
   */
  as: PropTypes.oneOf([
    'span',
  ]),

  /**
   * Add text content
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
    PropTypes.string,
    PropTypes.shape({}),
    PropTypes.array,
  ]),
};

/**
 * DefaultProps
 */
const defaultProps = {
  as: 'span',
  style: null,
  className: null,
};

/**
 * NavbarText component
 * Basis on Text component
 *
 * @author Sedelkov Egor <sedelkovegor@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 * @see [Bootstrap]{@link https://getbootstrap.com/docs/5.3/components/navbar}
 */
function NavbarText({
  as: Component,
  children,
  style,
  className,
}) {
  const BASE_CLASS_NAME = 'navbar-text';

  const classes = classNames(
    BASE_CLASS_NAME,
    className,
  );

  return (
    <Text as={Component} className={classes} style={style}>
      {children}
    </Text>
  );
}

NavbarText.propTypes = propTypes;
NavbarText.defaultProps = defaultProps;

export default NavbarText;
