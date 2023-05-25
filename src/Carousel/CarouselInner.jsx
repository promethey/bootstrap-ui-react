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
   * Add carousel items
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
 * CarouselInner is children component of Carousel
 * Basis on Box component
 */
export default function CarouselInner({
  style,
  children,
  className,
  ...rest
}) {
  const BASE_CLASS_NAME = 'carousel-inner';

  const classes = classNames(
    BASE_CLASS_NAME,
    className,
  );

  return (
    <Box style={style} className={classes} {...rest}>
      {children}
    </Box>
  );
}

CarouselInner.propTypes = propTypes;
CarouselInner.defaultProps = defaultProps;
