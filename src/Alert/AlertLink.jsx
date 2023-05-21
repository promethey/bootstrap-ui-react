import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * PropTypes
 */
const propTypes = {
  /**
   * Add other styles
   */
  style: PropTypes.shape({}),

  /**
   * Add link label
   * Required
   */
  children: PropTypes.node.isRequired,

  /**
   * Add other classnames
   */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /**
   * Alias for href
   */
  to: PropTypes.string,
};

/**
 * DefaultProps
 */
const defaultProps = {
  style: null,
  className: null,
  to: '#',
};

/**
 * AlertLink is children component of Alert
 */
function AlertLink({
  style,
  children,
  className,
  to,
  ...rest
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

AlertLink.propTypes = propTypes;
AlertLink.defaultProps = defaultProps;

export default AlertLink;
