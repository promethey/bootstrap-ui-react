import React, { useContext } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Box from "components/Box";
import AccordionCollapse from "./AccordionCollapse";
import { AccordionContext } from "./AccordionContext";
import { AccordionItemContext } from "./AccordionItem";

const propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({}),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
};

const defaultProps = {
  style: null,
  className: null,
};

/**
 *
 * AccordionBody is children component of Accordion
 *
 * @param {object} props
 * @param {ReactNode} props.children - React children components
 * @param {object} props.style - React CSS styles
 * @param {(string|Array<string>|object)} props.className - Classnames utility [(Read npmjs.com)]{@link https://www.npmjs.com/package/classnames}
 *
 * @returns {JSX.Element}
 *
 * @example
 * <AccordionBody>Example...</AccordionBody>
 *
 * @author Sedelkov Egor <sedelkovegor@gmail.com>
 * @version 1.0.0
 *
 */
function AccordionBody({ children, style, className, ...rest }) {
  /** @type {{checkActiveKey: bool}} */
  const { checkActiveKey } = useContext(AccordionContext);

  /** @type {number} */
  const itemKey = useContext(AccordionItemContext);

  /** @type {string} */
  const classes = classNames("accordion-body", className);

  return (
    <AccordionCollapse in={checkActiveKey(itemKey)}>
      <Box className={classes} style={style} {...rest}>
        {children}
      </Box>
    </AccordionCollapse>
  );
}

AccordionBody.propTypes = propTypes;
AccordionBody.defaultProps = defaultProps;

export default AccordionBody;
