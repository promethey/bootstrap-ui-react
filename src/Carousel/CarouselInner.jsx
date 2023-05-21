import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function CarouselInner(props) {
  const {
    style,
    children,
    className,
    ...rest
  } = props;

  const BASE_CLASS_NAME = 'carousel-inner';

  const classes = classNames(
    BASE_CLASS_NAME,
    className,
  );

  return (
    <div style={style} className={classes} {...rest}>
      {children}
    </div>
  );
}

CarouselInner.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add carousel items */
  children: PropTypes.node.isRequired,

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
};

CarouselInner.defaultProps = {
  style: null,
  className: null,
};

export default CarouselInner;
