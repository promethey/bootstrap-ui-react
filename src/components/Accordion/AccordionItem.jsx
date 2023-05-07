import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from 'components/Box';

export const AccordionItemContext = createContext(null);

function AccordionItem({
  children, style, className, itemKey, ...rest
}) {
  const classes = classNames(
    'accordion-item',
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

AccordionItem.propTypes = {
  /** Add subcomponents Header and Body */
  children: PropTypes.node.isRequired,

  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add other classnames */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),

  /** Select item key number for item */
  itemKey: PropTypes.number.isRequired,
};

AccordionItem.defaultProps = {
  style: null,
  className: null,
};

export default AccordionItem;