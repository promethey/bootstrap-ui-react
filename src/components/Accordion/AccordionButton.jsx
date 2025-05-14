import React, { useContext } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Box from "components/Box";
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
  onClick: PropTypes.func,
};

const defaultProps = {
  style: null,
  className: null,
  onClick: null,
};

/**
 * AccordionBody is children component of AccordionHeader
 * @component
 * @param {object} props - Component props
 * @param {ReactNode} props.children - React children component
 * @param {object} [props.style=null] - React CSS object
 * @param {(string|Array<string>|object)} [props.className=null] - Classnames utility [(Read npmjs.com)]{@link https://www.npmjs.com/package/classnames}
 * @param {function} [props.onClick=null] - Function event handler onclick
 * @author Sedelkov Egor <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function AccordionButton({ children, style, className, onClick, ...rest }) {
  /** @type {{changeActiveItems: Array<number>, checkActiveKey: bool}} */
  const { changeActiveItems, checkActiveKey } = useContext(AccordionContext);

  /** @type {number} */
  const itemKey = useContext(AccordionItemContext);

  /** @type {string} */
  const BASE_CLASS_NAME = "accordion-button";

  /** @type {string} */
  const classes = classNames(
    BASE_CLASS_NAME,
    { collapsed: !checkActiveKey(itemKey) },
    className
  );

  return (
    <Box
      as="button"
      type="button"
      className={classes}
      style={style}
      onClick={() => changeActiveItems(itemKey)}
      {...rest}
    >
      {children}
    </Box>
  );
}

AccordionButton.propTypes = propTypes;
AccordionButton.defaultProps = defaultProps;

export default AccordionButton;
