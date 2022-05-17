import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function AlertLink(props) {
  const {
    style, children, className, to, ...rest
  } = props;

  const BASE_CLASS_NAME = 'alert-link';

  const classes = classNames(
    BASE_CLASS_NAME,
    className,
  );

  return (
    <a
      href={to}
      className={classes}
      style={style}
      {...rest}
    >
      {children}
    </a>
  );
}

AlertLink.propTypes = {
  style: PropTypes.shape({}),
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  to: PropTypes.string,
};

AlertLink.defaultProps = {
  style: null,
  className: null,
  to: '#',
};

export default AlertLink;
