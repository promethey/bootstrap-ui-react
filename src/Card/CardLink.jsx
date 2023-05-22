import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from '../Link';

/**
 * PropTypes
 */
const propTypes = {
  /**
   * Add other styles
   */
  style: PropTypes.shape({}),

  /**
   * Add link label
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
 * CardLink is children component of Card
 * Basis on Link component
 */
export default function CardLink({
  style,
  children,
  className,
  ...rest
}) {
  const BASE_CLASS_NAME = 'card-link';

  const classes = classNames(
    BASE_CLASS_NAME,
    className,
  );

  return (
    <Link className={classes} style={style} {...rest}>
      {children}
    </Link>
  );
}

CardLink.propTypes = propTypes;
CardLink.defaultProps = defaultProps;
