import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getPrefix } from '../prefix';

function ButtonGroup(props) {
  const {
    style, children, className, size, isVertical, ...rest
  } = props;

  const BASE_CLASS_NAME = 'btn-group';

  const sizeClassName = getPrefix(BASE_CLASS_NAME, size);
  const verticalClassName = getPrefix(BASE_CLASS_NAME, 'vertical');

  const classes = classNames(
    !isVertical ? BASE_CLASS_NAME : verticalClassName,
    {
      [`${sizeClassName}`]: size,
    },
    className,
  );

  return (
    <div
      style={style}
      className={classes}
      role="group"
      {...rest}
    >
      {children}
    </div>
  );
}

ButtonGroup.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add button components */
  children: PropTypes.node.isRequired,

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /** Change size */
  size: PropTypes.oneOf(['sm', 'lg']),

  /** Activate vertical style */
  isVertical: PropTypes.bool,
};

ButtonGroup.defaultProps = {
  style: null,
  className: null,
  size: null,
  isVertical: false,
};

export default ButtonGroup;
