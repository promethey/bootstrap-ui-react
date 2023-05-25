import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from '../prefix';
import CarouselControlIcon from './CarouselControlIcon';
import Box from '../Box';
import { CarouselContext } from './CarouselContext';

/**
 * PropTypes
 */
const propTypes = {
  /**
   * Add other styles
   */
  style: PropTypes.shape({}),

  /**
   * Add other classes
   */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /**
   * Choose control type
   */
  type: PropTypes.oneOf([
    'prev',
    'next',
  ]).isRequired,
};

/**
 * DefaultProps
 */
const defaultProps = {
  style: null,
  className: null,
};

/**
 * CarouselControl is children component of Carousel
 * Basis on Box component
 */
export default function CarouselControl({
  style,
  className,
  type,
  ...rest
}) {
  const BASE_CLASS_NAME = 'carousel-control';

  const { targetId } = useContext(CarouselContext);

  const classes = classNames(
    /**
     * 'carousel-control-prev'
     * 'carousel-control-next'
     */
    usePrefix(BASE_CLASS_NAME, type),
    className,
  );

  return (
    <Box
      as="button"
      type="button"
      style={style}
      className={classes}
      data-bs-target={`#${targetId}`}
      data-bs-slide={type}
      {...rest}
    >
      <CarouselControlIcon type={type} />
      <Box as="span" visually="hidden">
        {type[0].toUpperCase() + type.slice(1)}
      </Box>
    </Box>
  );
}

CarouselControl.propTypes = propTypes;
CarouselControl.defaultProps = defaultProps;
