import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from '../Box';

/**
 * PropTypes
 */
const propTypes = {
  /**
   * Add other styles
   */
  style: PropTypes.shape({}),

  /**
   * Add other subcomponents
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
 * CardBody is children component of Card
 * Basis on Box component
 */
export default function CardBody({
  style,
  children,
  className,
  ...rest
}) {
  const BASE_CLASS_NAME = 'card-body';

  const classes = classNames(
    BASE_CLASS_NAME,
    className,
  );

  return (
    <Box className={classes} style={style} {...rest}>
      {children}
    </Box>
  );
}

CardBody.propTypes = propTypes;
CardBody.defaultProps = defaultProps;
