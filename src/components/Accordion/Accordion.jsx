import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Box from "components/Box";
import AccordionItem from "./AccordionItem";
import AccordionHeader from "./AccordionHeader";
import AccordionBody from "./AccordionBody";
import { AccordionContext } from "./AccordionContext";

const propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({}),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  flush: PropTypes.bool,
  activeItems: PropTypes.bool,
  defaultActiveKey: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  alwaysOpen: PropTypes.bool,
};

const defaultProps = {
  style: null,
  className: null,
  flush: false,
  activeItems: null,
  defaultActiveKey: null,
  alwaysOpen: false,
};

/**
 *
 * Accordion component [(Boostrap Official Documentation)]{@link https://getbootstrap.com/docs/5.3/components/accordion}
 *
 * @component
 *
 * @param {object} props
 * @param {ReactNode} props.children - React children components
 * @param {object} [props.style] - React CSS object
 * @param {(string|Array<string>|object)} [props.className] - Classnames utility [(Read npmjs.com)]{@link https://www.npmjs.com/package/classnames}
 * @param {bool} props.flush - Activate flush style
 * @param {Array<number>} props.activeItems - List of open items
 * @param {bool} props.alwaysOpen - Disable closing items when click another item
 *
 * @returns {JSX.Element}
 *
 * @example
 * <Accordion>
 *   <Accordion.Item>
 *     <Accordion.Header>Item #1</Accordion.Header>
 *     <Accordion.Body>Example...</Accordion.Body>
 *   </Accordion.Item>
 * </Accordion>
 *
 * @author Sedelkov Egor <sedelkovegor@gmail.com>
 * @version 1.0.0
 *
 */
function Accordion({
  children,
  style,
  className,
  flush,
  activeItems,
  alwaysOpen,
  ...rest
}) {
  /** @type {string} */
  const BASE_CLASS_NAME = "accordion";

  /** @type {string} */
  const classes = classNames(
    BASE_CLASS_NAME,
    { "accordion-flush": flush },
    className
  );

  const [activeItemsList, setActiveItemsList] = useState(() => {
    if (alwaysOpen) {
      return activeItems ? [...activeItems] : [];
    }
    return activeItems || null;
  });

  /**
   *
   * Function for set or add item(s) key of Accordion.Item
   * @param {number} itemKey
   *
   */
  const changeActiveItems = (itemKey) => {
    if (alwaysOpen) {
      setActiveItemsList((prev) =>
        prev.includes(itemKey)
          ? prev.filter((key) => key !== itemKey)
          : [...prev, itemKey]
      );
      return;
    }
    setActiveItemsList((prev) => (prev === itemKey ? null : itemKey));
  };

  /**
   *
   * Function for checking key inactive items list
   * @param {number} key
   *
   * @returns {bool}
   *
   */
  const checkActiveKey = (key) => {
    if (alwaysOpen) {
      return activeItemsList.includes(key);
    }
    return activeItemsList === key;
  };

  return (
    <AccordionContext.Provider value={{ changeActiveItems, checkActiveKey }}>
      <Box className={classes} style={style} {...rest}>
        {children}
      </Box>
    </AccordionContext.Provider>
  );
}

Accordion.propTypes = propTypes;
Accordion.defaultProps = defaultProps;

Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;

export default Accordion;
