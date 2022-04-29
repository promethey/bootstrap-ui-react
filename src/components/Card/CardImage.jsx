import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function CardImage(props) {
  const {
    style, className, src, alt, position,
  } = props;

  const classes = classNames(
    `card-img-${position}`,
    className,
  );

  return (
    <img src={src} alt={alt} className={classes} style={style} />
  );
}

CardImage.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /** Add source for image */
  src: PropTypes.string.isRequired,

  /** Add text for image */
  alt: PropTypes.string.isRequired,

  /** Change image position */
  position: PropTypes.oneOf(['top', 'bottom']),
};

CardImage.defaultProps = {
  style: null,
  className: null,
  position: 'top',
};

export default CardImage;
