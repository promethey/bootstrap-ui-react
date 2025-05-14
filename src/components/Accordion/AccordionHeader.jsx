import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Text from "components/Text";
import AccordionButton from "./AccordionButton";

const propTypes = {
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({}),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
};

const defaultProps = {
  as: "h2",
  style: null,
  className: null,
};

/**
 * AccordionHeader is children component of Accordion
 * @param {object} props - Component props
 * @param {string} [props.as=h2] - React component type
 * @param {ReactNode} props.children - React children components
 * @param {object} [props.style=null] - React CSS object
 * @param {(string|Array<string>|object)} [props.className=null] - Classnames utility [(Read npmjs.com)]{@link https://www.npmjs.com/package/classnames}
 * @return {JSX.Element}
 * @example
 * <AccordionHeader>Item #1</AccordionHeader>
 * @author Sedelkov Egor <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function AccordionHeader({
  as: ComponentType,
  children,
  style,
  className,
  ...rest
}) {
  /** @type {string} */
  const BASE_CLASS_NAME = "accordion-header";

  /** @type {string} */
  const classes = classNames(BASE_CLASS_NAME, className);

  return (
    <Text as={ComponentType} className={classes} style={style} {...rest}>
      <AccordionButton>{children}</AccordionButton>
    </Text>
  );
}

AccordionHeader.propTypes = propTypes;
AccordionHeader.defaultProps = defaultProps;

export default AccordionHeader;
