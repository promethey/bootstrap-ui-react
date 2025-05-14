import React, { createContext } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Box from "components/Box";

const propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({}),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  itemKey: PropTypes.number.isRequired,
};

const defaultProps = {
  style: null,
  className: null,
};

/**
 * AccordionItem is children component of Accordion
 * @component
 * @param {object} props - Component props
 * @param {ReactNode} props.children - React children components
 * @param {object} [props.style=null] - React CSS object
 * @param {(string|Array<string>|object)} [props.className=null] - Classnames utility [(Read npmjs.com)]{@link https://www.npmjs.com/package/classnames}
 * @param {number} props.itemKey - Item key number
 * @returns {JSX.Element}
 * @example
 * <AccordionItem>
 *   <Accordion.Header>Item #1</Accordion.Header>
 *   <Accordion.Body>Example...</Accordion.Body>
 * </AccordionItem>
 * @author Sedelkov Egor <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function AccordionItem({ children, style, className, itemKey, ...rest }) {
  /** @type {string} */
  const BASE_CLASS_NAME = "accordion-item";

  /** @type {string} */
  const classes = classNames(BASE_CLASS_NAME, className);

  return (
    <AccordionItemContext.Provider value={itemKey}>
      <Box className={classes} style={style} {...rest}>
        {children}
      </Box>
    </AccordionItemContext.Provider>
  );
}

AccordionItem.propTypes = propTypes;
AccordionItem.defaultProps = defaultProps;

export const AccordionItemContext = createContext(null);
export default AccordionItem;
