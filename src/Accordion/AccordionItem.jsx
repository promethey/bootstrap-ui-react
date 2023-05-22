import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from '../Box';

export const AccordionItemContext = createContext(null);

/**
 * PropTypes
 */
const propTypes = {
  /**
   * Add subcomponents Header and Body
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

  /**
   * Select item key number for item
   */
  itemKey: PropTypes.number.isRequired,
};

/**
 * DefaultProps
 */
const defaultProps = {
  style: null,
  className: null,
};

/**
 * AccordionItem is children component of Accordion
 * Basis on Box component
 */
export default function AccordionItem({
  children,
  style,
  className,
  itemKey,
  ...rest
}) {
  const BASE_CLASS_NAME = 'accordion-item';

  const classes = classNames(
    BASE_CLASS_NAME,
    className,
  );

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
