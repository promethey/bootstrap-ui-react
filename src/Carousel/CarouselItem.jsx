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
   * Add slide content
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
   * Add active state for slide
   */
  active: PropTypes.bool,

  /**
   * Change default interval (ms)
   */
  interval: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
  ]),
};

/**
 * DefaultProps
 */
const defaultProps = {
  style: null,
  className: null,
  active: false,
  interval: null,
};

/**
 * CarouselItem is children component of Carousel
 * Basis on Box component
 */
export default function CarouselItem({
  style,
  children,
  className,
  active,
  interval,
  ...rest
}) {
  const BASE_CLASS_NAME = 'carousel-item';

  const classes = classNames(
    BASE_CLASS_NAME,
    { active },
    className,
  );

  return (
    <Box
      style={style}
      className={classes}
      data-bs-interval={interval}
      {...rest}
    >
      {children}
    </Box>
  );
}

CarouselItem.propTypes = propTypes;
CarouselItem.defaultProps = defaultProps;
