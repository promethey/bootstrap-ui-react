import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from '../prefix';
import Text from '../Text';

/**
 * PropTypes
 */
const propTypes = {
  /**
   * Add other styles
   */
  style: PropTypes.shape({}),

  /**
   * Add heading content
   */
  children: PropTypes.node.isRequired,

  /**
   * Add other classnames
   */
  className: PropTypes.string,

  /**
   * Change font size special classname
   */
  banner: PropTypes.oneOf([
    1,
    2,
    3,
    4,
    5,
    6,
  ]),
};

/**
 * DefaultProps
 */
const defaultProps = {
  style: null,
  className: null,
  banner: null,
};

/**
 * Heading component
 * Basis on Text component
 *
 * @author Sedelkov Egor <sedelkovegor@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 *
 * Changelog:
 * - Refactoring component [26/05/2023]
 */
export default function Heading({
  style,
  children,
  className,
  banner,
  ...rest
}) {
  const classes = classNames(
    {
      /**
       * banner is synonimus of 'display' classname
       */
      [usePrefix('display', banner)]: banner,
    },
    className,
  );

  return (
    <Text style={style} className={classes} {...rest}>
      {children}
    </Text>
  );
}

Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;
