import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from 'helpers/prefix';
import Box from 'components/Box';

function ButtonGroup(props) {
  const {
    style,
    children,
    className,
    size,
    isVertical,
    drop,
    ...rest
  } = props;

  const BASE_CLASS_NAME = 'btn-group';

  const verticalClassName = usePrefix(BASE_CLASS_NAME, 'vertical');

  const classes = classNames(
    !isVertical ? BASE_CLASS_NAME : verticalClassName,
    {
      [usePrefix(BASE_CLASS_NAME, size)]: size,
      [`drop${drop}`]: drop,
    },
    className,
  );

  return (
    <Box
      style={style}
      className={classes}
      role="group"
      {...rest}
    >
      {children}
    </Box>
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

  /** Change dropdown directions */
  drop: PropTypes.oneOf([
    'up',
    'end',
    'start',
  ]),
};

ButtonGroup.defaultProps = {
  style: null,
  className: null,
  size: null,
  isVertical: false,
  drop: null,
};

export default ButtonGroup;
