import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Text from '../Text';

/**
 * PropTypes
 */
const propTypes = {
  /**
   * Change component type
   */
  as: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'div',
  ]),

  /**
   * Add other styles
   */
  style: PropTypes.shape({}),

  /**
   * Add children components
   */
  children: PropTypes.node.isRequired,

  /**
   * Add other classes
   */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
};

/**
 * DefaultProps
 */
const defaultProps = {
  as: 'div',
  style: null,
  className: null,
};

/**
 * CardHeader is children component of Card
 * Basis on Box component
 */
export default function CardHeader({
  as: Component,
  style,
  children,
  className,
  ...rest
}) {
  const BASE_CLASS_NAME = 'card-header';

  const classes = classNames(
    BASE_CLASS_NAME,
    className,
  );

  return (
    <Text as={Component} className={classes} style={style} {...rest}>
      {children}
    </Text>
  );
}

CardHeader.propTypes = propTypes;
CardHeader.defaultProps = defaultProps;
