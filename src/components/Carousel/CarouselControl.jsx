import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from 'helpers/prefix';
import CarouselControlIcon from './CarouselControlIcon';

function CarouselControl(props) {
  const {
    style,
    className,
    type,
    target,
    ...rest
  } = props;

  const BASE_CLASS_NAME = 'carousel-control';

  const classes = classNames(
    usePrefix(BASE_CLASS_NAME, type),
    className,
  );

  return (
    <button
      type="button"
      data-bs-target={`#${target}`}
      data-bs-slide={type}
      className={classes}
      {...rest}
    >
      <CarouselControlIcon type={type} />
      <span className="visually-hidden">
        {type[0].toUpperCase() + type.slice(1)}
      </span>
    </button>
  );
}

CarouselControl.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /** Alias for attribute *id* */
  id: PropTypes.string.isRequired,

  /** Choose control type */
  type: PropTypes.oneOf(['prev', 'next']).isRequired,

  /** Choose carousel id (auto) */
  target: PropTypes.string.isRequired,
};

CarouselControl.defaultProps = {
  style: null,
  className: null,
};

export default CarouselControl;
