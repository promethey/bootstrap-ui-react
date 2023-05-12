import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from 'components/Box';
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
 * Accordion Body component
 * Basis on Box component
 *
 * @author Sedelkov Egor <sedelkovegor@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 * @see [Bootstrap]{@link https://getbootstrap.com/docs/5.3/components/accordion}
 */
function AccordionBody({
  children,
  style,
  className,
  ...rest
}) {
  const { checkActiveKey } = useContext(AccordionContext);
  const itemKey = useContext(AccordionItemContext);

  const classes = classNames(
    'accordion-body',
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

export default AccordionBody;
