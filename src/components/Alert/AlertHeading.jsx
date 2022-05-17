import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function AlertHeading(props) {
  const {
    style, children, className, ...rest
  } = props;

  const BASE_CLASS_NAME = 'alert-heading';

  const classes = classNames(
    BASE_CLASS_NAME,
    className,
  );

  return (
    <h4 className={classes} style={style} {...rest}>
      {children}
    </h4>
  );
}

AlertHeading.propTypes = {
  style: PropTypes.shape({}),
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
};

AlertHeading.defaultProps = {
  style: null,
  className: null,
};

export default AlertHeading;
