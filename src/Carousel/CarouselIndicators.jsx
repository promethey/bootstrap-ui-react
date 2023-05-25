import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
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
 * CarouselIndicators is children component of Carousel
 * Basis on Box component
 */
export default function CarouselIndicators({
  style,
  className,
  ...rest
}) {
  const BASE_CLASS_NAME = 'carousel-indicators';

  const { targetId, slides } = useContext(CarouselContext);

  const classes = classNames(
    BASE_CLASS_NAME,
    className,
  );

  return (
    <Box style={style} className={classes} {...rest}>
      {React.Children.map(slides, (slide, index) => (
        <Box
          as="button"
          type="button"
          className={classNames({ active: slide.props.active })}
          data-bs-target={`#${targetId}`}
          data-bs-slide-to={index}
        >
          <Box visually="hidden">
            Indicator #
            {index + 1}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

CarouselIndicators.propTypes = propTypes;
CarouselIndicators.defaultProps = defaultProps;
