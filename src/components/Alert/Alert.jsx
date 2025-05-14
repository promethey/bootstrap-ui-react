import React, { useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { usePrefix } from "helpers/prefix";
import Box from "components/Box";
import CloseButton from "components/CloseButton";
import AlertLink from "./AlertLink";
import AlertHeading from "./AlertHeading";

const propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({}),
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  theme: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ]),
  dissmisible: PropTypes.bool,
  animated: PropTypes.bool,
  onClose: PropTypes.func,
};

const defaultProps = {
  style: null,
  className: null,
  theme: "primary",
  dissmisible: false,
  animated: false,
  onClose: null,
};

/**
 * Alert component [(Bootstrap Official Documentation)]{@link https://getbootstrap.com/docs/5.3/components/alerts}
 * @component
 * @param {object} props
 * @param {object} [props.style=null] - React CSS object
 * @param {ReactNode} props.children - React children components
 * @param {(string|Array<string>|object)} [props.className=null] - Classnames utility [(Read npmjs.com)]{@link https://www.npmjs.com/package/classnames}
 * @param {string} [props.theme="primary"] - Change theme color
 * @param {boolean} [props.dismissible=false] - Add close button
 * @param {boolean} [props.animated=false] - Add animation styles
 * @param {function} [props.onClose=null] - Add event hanlder for click on close button
 * @returns {JSX.Element}
 * @example
 * <Alert>A simple primary alert—check it out!</Alert>
 * @author Sedelkov Egor <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function Alert({
  style,
  children,
  className,
  theme,
  dissmisible,
  animated,
  onClose,
  ...rest
}) {
  /** @type {string} */
  const BASE_CLASS_NAME = "alert";

  const alertRef = useRef(null);

  /** @type {string} */
  const classes = classNames(
    BASE_CLASS_NAME,
    usePrefix(BASE_CLASS_NAME, theme),
    {
      [usePrefix(BASE_CLASS_NAME, "dismissible")]: dissmisible,
      "show fade": animated,
    },
    className
  );

  return (
    <Box
      role="alert"
      ref={alertRef}
      className={classes}
      style={style}
      {...rest}
    >
      {children}
      {dissmisible && <CloseButton onClick={onClose} />}
    </Box>
  );
}

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

Alert.Link = AlertLink;
Alert.Heading = AlertHeading;

export default Alert;
