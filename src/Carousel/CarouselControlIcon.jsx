import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from '../prefix';
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
   * Add othet classnames
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
 * CarouselControlItem is children component of Carousel
 * Basis on Box component
 */
export default function CarouselControlIcon({
  style,
  className,
  type,
  ...rest
}) {
  const BASE_CLASS_NAME = 'carousel-control';

  const classes = classNames(
    /**
     * carousel-control-prev-icon
     * carousel-control-next-icon
     */
    usePrefix(BASE_CLASS_NAME, type, 'icon'),
    className,
  );

  return (
    <Box
      style={style}
      className={classes}
      aria-hidden
      {...rest}
    />
  );
}

CarouselControlIcon.propTypes = propTypes;
CarouselControlIcon.defaultProps = defaultProps;
