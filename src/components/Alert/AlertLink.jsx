import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {
  style: PropTypes.shape({}),
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  to: PropTypes.string,
};

const defaultProps = {
  style: null,
  className: null,
  to: "#",
};

/**
 * AlertLink is children component of Alert
 * @component
 * @param {object} props
 * @param {object} [props.style=null] - React CSS object
 * @param {ReactNode} props.children - React children component
 * @param {(string|Array<string>|object)} [props.className=null] - Classnames utility [(Read npmjs.com)]{@link https://www.npmjs.com/package/classnames}
 * @param {string} [props.to=#] - Add link path
 * @returns {JSX.Element}
 * @author Sedelkov Egor <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function AlertLink({ style, children, className, to, ...rest }) {
  /** @type {string} */
  const BASE_CLASS_NAME = "alert-link";

  /** @type {string} */
  const classes = classNames(BASE_CLASS_NAME, className);

  return (
    <a href={to} className={classes} style={style} {...rest}>
      {children}
    </a>
  );
}

AlertLink.propTypes = propTypes;
AlertLink.defaultProps = defaultProps;

export default AlertLink;
