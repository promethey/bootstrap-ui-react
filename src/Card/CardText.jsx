import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
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
   * Add text content
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
  style: null,
  className: null,
};

/**
 * CardText is children component of Card
 * Basis on Text component
 */
export default function CardText({
  style,
  children,
  className,
  ...rest
}) {
  const BASE_CLASS_NAME = 'card-text';

  const classes = classNames(
    BASE_CLASS_NAME,
    className,
  );

  return (
    <Text className={classes} style={style} {...rest}>
      {children}
    </Text>
  );
}

CardText.propTypes = propTypes;
CardText.defaultProps = defaultProps;
