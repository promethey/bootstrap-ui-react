import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from '../../scripts/prefix';
import CarouselInner from './CarouselInner';
import CarouselItem from './CarouselItem';
import CarouselControl from './CarouselControl';
import CarouselIndicators from './CarouselIndicators';
import CarouselCaption from './CarouselCaption';
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
   * Add slides item components
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
   * Alias for attribute id
   */
  id: PropTypes.string.isRequired,

  /**
   * Add control buttons
   */
  controls: PropTypes.bool,

  /**
   * Add indicator buttons
   */
  indicators: PropTypes.bool,

  /**
   * Change slide animation to fade
   */
  fade: PropTypes.bool,

  /**
   * If set to true, autoplays the carousel after the
   * user manually cycles the first item.
   * If set to "carousel", autoplays the carousel on load.
  */
  ride: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['carousel']),
  ]),

  /**
   * Disable touch swiping
   * for mobile devices
   */
  touch: PropTypes.bool,

  /**
   * Change default interval (ms)
   */
  interval: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
  ]),

  /**
   * Activate dark theme
   */
  dark: PropTypes.bool,
};

/**
 * DefaultProps
 */
const defaultProps = {
  style: null,
  className: null,
  controls: false,
  indicators: false,
  fade: false,
  ride: 'carousel',
  touch: null,
  interval: null,
  dark: false,
};

/**
 * Carousel component
 * Basis on Box component
 *
 * @author Sedelkov Egor <sedelkovegor@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 * @link https://getbootstrap.com/docs/5.3/components/carousel
 *
 * Changelog:
 * - Refactoring component [26/05/2023]
 */
export default function Carousel({
  style,
  children,
  className,
  id,
  controls,
  indicators,
  fade,
  ride,
  touch,
  interval,
  dark,
  ...rest
}) {
  const BASE_CLASS_NAME = 'carousel';

  const classes = classNames(
    BASE_CLASS_NAME,
    {
      [usePrefix(BASE_CLASS_NAME, 'fade')]: fade,
      [usePrefix(BASE_CLASS_NAME, 'dark')]: dark,
    },
    'slide',
    className,
  );

  return (
    <CarouselContext.Provider value={{ targetId: id, slides: children }}>
      <Box
        style={style}
        className={classes}
        id={id}
        data-bs-ride={ride}
        data-bs-touch={touch}
        data-bs-interval={interval}
        {...rest}
      >
        {indicators && (
          <CarouselIndicators />
        )}
        <CarouselInner>{children}</CarouselInner>
        {controls && ([
          <CarouselControl type="prev" />,
          <CarouselControl type="next" />,
        ])}
      </Box>
    </CarouselContext.Provider>
  );
}

Carousel.propTypes = propTypes;
Carousel.defaultProps = defaultProps;

Carousel.Item = CarouselItem;
Carousel.Caption = CarouselCaption;
