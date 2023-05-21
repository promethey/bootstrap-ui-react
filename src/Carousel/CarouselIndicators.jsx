import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function CarouselIndicators(props) {
  const {
    style,
    className,
    target,
    slides,
    ...rest
  } = props;

  const BASE_CLASS_NAME = 'carousel-indicators';

  const classes = classNames(
    BASE_CLASS_NAME,
    className,
  );

  return (
    <div style={style} className={classes} {...rest}>
      {React.Children.map(slides, (slide, index) => (
        <button
          type="button"
          className={classNames({ active: slide.props.isActive })}
          data-bs-target={`#${target}`}
          data-bs-slide-to={index}
        >
          <div className="visually-hidden">
            Indicator #
            {index + 1}
          </div>
        </button>
      ))}
    </div>
  );
}

CarouselIndicators.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /** Alias for attribute *id* */
  id: PropTypes.string.isRequired,

  /** Choose carousel id (auto) */
  target: PropTypes.string.isRequired,

  /** Add carousel items (auto) */
  slides: PropTypes.node.isRequired,
};

CarouselIndicators.defaultProps = {
  style: null,
  className: null,
};

export default CarouselIndicators;
