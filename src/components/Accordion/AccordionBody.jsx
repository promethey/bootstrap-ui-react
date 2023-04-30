import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from 'components/Box';
import AccordionCollapse from './AccordionCollapse';
import { AccordionContext } from './AccordionContext';
import { AccordionItemContext } from './AccordionItem';

function AccordionBody({
  children, style, className, ...rest
}) {
  const { activeItem } = useContext(AccordionContext);
  const activeKey = useContext(AccordionItemContext);

  const classes = classNames(
    'accordion-body',
    className,
  );

  return (
    <AccordionCollapse in={activeItem === activeKey}>
      <Box className={classes} style={style} {...rest}>
        {children}
      </Box>
    </AccordionCollapse>
  );
}

AccordionBody.propTypes = {
  // Add Accordion header title
  children: PropTypes.node.isRequired,

  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add other classnames */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
};

AccordionBody.defaultProps = {
  style: null,
  className: null,
};

export default AccordionBody;
