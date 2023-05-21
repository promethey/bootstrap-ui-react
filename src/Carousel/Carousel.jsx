import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from '../prefix';
import CarouselInner from './CarouselInner';
import CarouselItem from './CarouselItem';
import CarouselControl from './CarouselControl';
import CarouselIndicators from './CarouselIndicators';
import CarouselCaption from './CarouselCaption';

function Carousel(props) {
  const {
    style,
    children,
    className,
    id,
    isControls,
    isIndicators,
    isFade,
    isRide,
    isTouch,
    interval,
    isDark,
    ...rest
  } = props;

  const BASE_CLASS_NAME = 'carousel';

  const classes = classNames(
    BASE_CLASS_NAME,
    {
      [usePrefix(BASE_CLASS_NAME, 'fade')]: isFade,
      [usePrefix(BASE_CLASS_NAME, 'dark')]: isDark,
    },
    'slide',
    className,
  );

  return (
    <div
      style={style}
      className={classes}
      id={id}
      data-bs-ride={isRide}
      data-bs-touch={isTouch}
      data-bs-interval={interval}
      {...rest}
    >
      {isIndicators && (
        <CarouselIndicators target={id} slides={children} />
      )}
      <CarouselInner>
        {children}
      </CarouselInner>
      {isControls && ([
        <CarouselControl type="prev" target={id} />,
        <CarouselControl type="next" target={id} />,
      ])}
    </div>
  );
}

Carousel.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add slides */
  children: PropTypes.node.isRequired,

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /** Alias for attribute *id* */
  id: PropTypes.string.isRequired,

  /** Add controls */
  isControls: PropTypes.bool,

  /** Add indicators */
  isIndicators: PropTypes.bool,

  /** Change slide animation to fade */
  isFade: PropTypes.bool,

  /**
   * If set to true, autoplays the carousel after the
   * user manually cycles the first item.
   * If set to "carousel", autoplays the carousel on load.
  */
  isRide: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['carousel']),
  ]),

  /** Disable touch swiping */
  isTouch: PropTypes.bool,

  /** Change default interval (in milliseconds) */
  interval: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
  ]),

  /** Activate dark theme */
  isDark: PropTypes.bool,
};

Carousel.defaultProps = {
  style: null,
  className: null,
  isControls: false,
  isIndicators: false,
  isFade: false,
  isRide: 'carousel',
  isTouch: null,
  interval: null,
  isDark: false,
};

Carousel.Item = CarouselItem;
Carousel.Caption = CarouselCaption;

export default Carousel;
