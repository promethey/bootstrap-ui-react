import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from 'components/Box';
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

  /**
   * Add handler for onClick event
   */
  onClick: PropTypes.func,
};

/**
 * DefaultProps
 */
const defaultProps = {
  style: null,
  className: null,
  onClick: null,
};

/**
 * AccordionBody is children component of AccordionHeader
 * Basis on Box component
 */
function AccordionButton({
  children,
  style,
  className,
  onClick,
  ...rest
}) {
  const { changeActiveItems, checkActiveKey } = useContext(AccordionContext);
  const itemKey = useContext(AccordionItemContext);
  const BASE_CLASS_NAME = 'accordion-button';

  const classes = classNames(
    BASE_CLASS_NAME,
    { collapsed: !checkActiveKey(itemKey) },
    className,
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
