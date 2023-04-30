import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from 'components/Box';
import { AccordionContext } from './AccordionContext';
import { AccordionItemContext } from './AccordionItem';

function AccordionButton({
  children, style, className, onClick, ...rest
}) {
  const { activeItem, setActiveItem, alwaysOpen } = useContext(AccordionContext);
  const activeKey = useContext(AccordionItemContext);

  const classes = classNames(
    'accordion-button',
    { collapsed: activeItem !== activeKey },
    className,
  );

  return (
    <Box
      as="button"
      type="button"
      className={classes}
      style={style}
      onClick={() => setActiveItem((prev) => {
        if (alwaysOpen) {
          return prev.includes(activeKey) ? prev.filter((item) => item !== activeKey)
            : [...prev, activeKey];
        }
        return prev === activeKey ? null : activeKey;
      })}
      {...rest}
    >
      {children}
    </Box>
  );
}

AccordionButton.propTypes = {
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

  /** Add handler for onClick event */
  onClick: PropTypes.func,
};

AccordionButton.defaultProps = {
  style: null,
  className: null,
  onClick: null,
};

export default AccordionButton;
