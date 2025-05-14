import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Text from "components/Text";

const propTypes = {
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({}),
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

const defaultProps = {
  as: "h4",
  style: null,
  className: null,
};

/**
 * AlertHeading is children component of Alert
 * @component
 * @param {object} props
 * @param {React.FC} [props.as=h4] - Change component type
 * @param {object} [props.style=null] - React CSS object
 * @param {ReactNode} props.children - React children component
 * @param {(string|Array<string>|object)} [props.className=null] - Classnames utility [(Read npmjs.com)]{@link https://www.npmjs.com/package/classnames}
 * @returns {JSX.Element}
 * @author Sedelkov Egor <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function AlertHeading({
  as: ComponentType,
  style,
  children,
  className,
  ...rest
}) {
  /** @type {string} */
  const BASE_CLASS_NAME = "alert-heading";

  /** @type {string} */
  const classes = classNames(BASE_CLASS_NAME, className);

  return (
    <Text as={ComponentType} className={classes} style={style} {...rest}>
      {children}
    </Text>
  );
}

AlertHeading.propTypes = propTypes;
AlertHeading.defaultProps = defaultProps;

export default AlertHeading;
