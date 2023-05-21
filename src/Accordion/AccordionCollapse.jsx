import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Collapse from '../Collapse';

/**
 * PropTypes
 */
const propTypes = {
  /**
   * Add Accordion content
   */
  children: PropTypes.node.isRequired,

  /**
   * Add other styles
   */
  style: PropTypes.shape({}),

  /**
   * Add other classnames
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
};

/**
 * DefaultProps
 */
const defaultProps = {
  style: null,
  className: null,
};

/**
 * AccordionCollapse is children component of AccordionBody
 * Basis on Collapse component
 */
function AccordionCollapse({
  children,
  style,
  className,
  ...rest
}) {
  const classes = classNames(
    'accordion-collapse',
    className,
  );

  return (
    <Collapse
      className={classes}
      style={style}
      {...rest}
    >
      {children}
    </Collapse>
  );
}

AccordionCollapse.propTypes = propTypes;
AccordionCollapse.defaultProps = defaultProps;

export default AccordionCollapse;
