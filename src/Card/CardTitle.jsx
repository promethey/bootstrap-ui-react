import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Heading from '../Heading';

/**
 * PropTypes
 */
const propTypes = {
  /**
   * Add other styles
   */
  style: PropTypes.shape({}),

  /**
   * Add title content
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
 * CardTitle is children component of Card
 * Basis on Heading component
 */
export default function CardTitle({
  style,
  children,
  className,
}) {
  const BASE_CLASS_NAME = 'card-title';

  const classes = classNames(
    BASE_CLASS_NAME,
    className,
  );

  return (
    <Heading className={classes} style={style}>
      {children}
    </Heading>
  );
}

CardTitle.propTypes = propTypes;
CardTitle.defaultProps = defaultProps;
