import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function ButtonGroup(props) {
  const {
    style, children, className, ...rest
  } = props;

  const BASE_CLASS_NAME = 'btn-group';

  const classes = classNames(
    BASE_CLASS_NAME,
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
};

ButtonGroup.defaultProps = {
  style: null,
  className: null,
};

export default ButtonGroup;
