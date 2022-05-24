import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from 'helpers/prefix';

function CarouselControlIcon(props) {
  const {
    style,
    className,
    type,
    ...rest
  } = props;

  const BASE_CLASS_NAME = 'carousel-control';

  const classes = classNames(
    usePrefix(BASE_CLASS_NAME, type, 'icon'),
    className,
  );

  return (
    <span
      style={style}
      className={classes}
      aria-hidden
      {...rest}
    />
  );
}

CarouselControlIcon.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add othet classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /** Alias for attribute *id* */
  id: PropTypes.string.isRequired,

  /** Choose control type */
  type: PropTypes.oneOf(['prev', 'next']).isRequired,
};

CarouselControlIcon.defaultProps = {
  style: null,
  className: null,
};

export default CarouselControlIcon;
