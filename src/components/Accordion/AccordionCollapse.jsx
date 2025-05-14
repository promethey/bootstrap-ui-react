import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Collapse from "components/Collapse";

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
 * AccordionCollapse is children component of AccordionBody
 *
 * @param {object} props - Component props
 * @param {React.node} props.children - React children componenents
 * @param {object} props.style - React CSS object
 * @param {(string|Array<string>|object)} props.className - Classnames utility [(Read npmjs.com)]{@link https://www.npmjs.com/package/classnames}
 *
 * @returns {JSX.Element}
 *
 * @author Sedelkov Egor <sedelkovegor@gmail.com>
 * @version 1.0.0
 *
 */
function AccordionCollapse({ children, style, className, ...rest }) {
  /** @type {string} */
  const classes = classNames("accordion-collapse", className);

  return (
    <Collapse className={classes} style={style} {...rest}>
      {children}
    </Collapse>
  );
}

AccordionCollapse.propTypes = propTypes;
AccordionCollapse.defaultProps = defaultProps;

export default AccordionCollapse;
