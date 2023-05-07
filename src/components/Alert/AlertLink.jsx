import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function AlertLink({
  style, children, className, to, ...rest
}) {
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
  // Add other styles
  style: PropTypes.shape({}),

  // Add link label
  children: PropTypes.node.isRequired,

  // Add other classnames
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  // Alias for href
  to: PropTypes.string,
};

AlertLink.defaultProps = {
  style: null,
  className: null,
  to: '#',
};

export default AlertLink;
