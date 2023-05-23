import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from '../prefix';
import Flex from '../Flex';

/**
 * PropTypes
 */
const propTypes = {
  /**
   * Add other styles
   */
  style: PropTypes.shape({}),

  /**
   * Add other children components
   */
  children: PropTypes.node.isRequired,

  /**
   * Add other classes
   */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /**
   * Activate fluid container
   * or change breakpoint
   */
  fluid: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf([
      'sm',
      'md',
      'lg',
      'xl',
      'xxl',
    ]),
  ]),
};

/**
 * DefaultProps
 */
const defaultProps = {
  style: null,
  className: null,
  fluid: false,
};

/**
 * Container component
 * Based on Flex component
 *
 * @author Sedelkov Egor <sedelkovegor@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 *
 * Changelog:
 * - Refactoring component [24/05/2023]
 */
export default function Container({
  style,
  children,
  className,
  fluid,
  ...rest
}) {
  const BASE_CLASSNAME = 'container';

  const classes = classNames(
    {
      [usePrefix(BASE_CLASSNAME, fluid)]: typeof fluid === 'string' && fluid,
      [usePrefix(BASE_CLASSNAME, 'fluid')]: typeof fluid === 'boolean' && fluid,
      [BASE_CLASSNAME]: !fluid,
    },
    className,
  );

  return (
    <Flex noflex style={style} className={classes} {...rest}>
      {children}
    </Flex>
  );
}

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;
