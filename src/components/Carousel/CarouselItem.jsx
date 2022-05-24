import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function CarouselItem(props) {
  const {
    style,
    children,
    className,
    isActive,
    interval,
    ...rest
  } = props;

  const BASE_CLASS_NAME = 'carousel-item';

  const classes = classNames(
    BASE_CLASS_NAME,
    { active: isActive },
    className,
  );

  return (
    <div
      style={style}
      className={classes}
      data-bs-interval={interval}
      {...rest}
    >
      {children}
    </div>
  );
}

CarouselItem.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add slide content */
  children: PropTypes.node.isRequired,

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /** Add active state for slide */
  isActive: PropTypes.bool,

  /** Change default interval (in milliseconds) */
  interval: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
  ]),
};

CarouselItem.defaultProps = {
  style: null,
  className: null,
  isActive: false,
  interval: null,
};

export default CarouselItem;
