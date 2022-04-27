import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function AlertHeading(props) {
  const {
    style, children, className,
  } = props;

  const classes = classNames(
    'alert-heading',
    className,
  );

  return (
    <h4 className={classes} style={style}>
      {children}
    </h4>
  );
}

AlertHeading.propTypes = {
  style: PropTypes.shape({}),
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

AlertHeading.defaultProps = {
  style: null,
  className: null,
};

export default AlertHeading;
