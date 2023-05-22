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
   * Add subtitle content
   */
  children: PropTypes.node.isRequired,

  /**
   * Add other classnames
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
 * CardSubtitle is children component of Card
 * Basis on Heading component
 */
export default function CardSubtitle({
  style,
  children,
  className,
  ...rest
}) {
  const BASE_CLASS_NAME = 'card-title';

  const classes = classNames(
    BASE_CLASS_NAME,
    className,
  );

  return (
    <Heading className={classes} style={style} {...rest}>
      {children}
    </Heading>
  );
}

CardSubtitle.propTypes = propTypes;
CardSubtitle.defaultProps = defaultProps;
