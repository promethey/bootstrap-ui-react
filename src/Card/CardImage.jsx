import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from '../../scripts/prefix';

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
   * Add source for image
   */
  src: PropTypes.string.isRequired,

  /**
   * Add text for image
   */
  alt: PropTypes.string.isRequired,

  /**
   * Change image position
   */
  position: PropTypes.oneOf(['top', 'bottom']),
};

/**
 * DefaultProps
 */
const defaultProps = {
  style: null,
  className: null,
  position: 'top',
};

/**
 * CardImage is children component of Card
 */
export default function CardImage({
  style,
  className,
  src,
  alt,
  position,
  ...rest
}) {
  const BASE_CLASS_NAME = 'card-img';

  const classes = classNames(
    /**
     * card-image-top (default)
     * card-image-bottom
     */
    usePrefix(BASE_CLASS_NAME, position),
    className,
  );

  return (
    <img
      src={src}
      alt={alt}
      className={classes}
      style={style}
      {...rest}
    />
  );
}

CardImage.propTypes = propTypes;
CardImage.defaultProps = defaultProps;
