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
   * Add children components
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
 * CarouselCaption is children component of Carousel
 * Basis on Box component
 */
export default function CarouselCaption({
  style,
  children,
  className,
  ...rest
}) {
  const BASE_CLASS_NAME = 'carousel-caption';

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

CarouselCaption.propTypes = propTypes;
CarouselCaption.defaultProps = defaultProps;
