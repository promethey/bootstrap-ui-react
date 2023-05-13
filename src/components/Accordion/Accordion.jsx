import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from 'components/Box';
import AccordionItem from './AccordionItem';
import AccordionHeader from './AccordionHeader';
import AccordionBody from './AccordionBody';
import { AccordionContext } from './AccordionContext';

/**
 * PropTypes
 */
const propTypes = {
  /**
   * Add Accordion Items
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
   * Activate flush style
   */
  flush: PropTypes.bool,

  /**
   * List of active (opened) items
   */
  activeItems: PropTypes.bool,

  /**
   * Set default active key for open item(s)
   */
  defaultActiveKey: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),

  /**
   * Disable closing items when click another item
   */
  alwaysOpen: PropTypes.bool,
};

/**
 * DefaultProps
 */
const defaultProps = {
  style: null,
  className: null,
  flush: false,
  activeItems: null,
  defaultActiveKey: null,
  alwaysOpen: false,
};

/**
 * Accordion component
 * Basis on Box component
 *
 * Subcomponents:
 * - Item
 * - Header
 * - Body
 *
 * @author Sedelkov Egor <sedelkovegor@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 * @link https://getbootstrap.com/docs/5.3/components/accordion
 *
 * Changelog:
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
  const BASE_CLASS_NAME = 'accordion';

  const classes = classNames(
    BASE_CLASS_NAME,
    { 'accordion-flush': flush },
    className,
  );

  const [activeItemsList, setActiveItemsList] = useState(() => {
    if (alwaysOpen) {
      return activeItems ? [...activeItems] : [];
    }
    return activeItems || null;
  });

  /**
   * Function for set or add item(s)
   * key of Accordion.Item
   */
  const changeActiveItems = (itemKey) => {
    if (alwaysOpen) {
      setActiveItemsList((prev) => (
        prev.includes(itemKey)
          ? prev.filter((key) => key !== itemKey)
          : [...prev, itemKey]
      ));
      return;
    }
    setActiveItemsList((prev) => (prev === itemKey ? null : itemKey));
  };

  /**
   * Function for checking key inactive
   * items list
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
