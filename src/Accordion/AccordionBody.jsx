import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from '../Box';
import AccordionCollapse from './AccordionCollapse';
import { AccordionContext } from './AccordionContext';
import { AccordionItemContext } from './AccordionItem';

/**
 * PropTypes
 */
const propTypes = {
  /**
   * Add Accordion header title
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
 * AccordionBody is children component of Accordion
 * Basis on Box component
 */
export default function AccordionBody({
  children,
  style,
  className,
  ...rest
}) {
  const { checkActiveKey } = useContext(AccordionContext);
  const itemKey = useContext(AccordionItemContext);

  const BASE_CLASS_NAME = 'accordion-body';

  const classes = classNames(
    BASE_CLASS_NAME,
    className,
  );

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
