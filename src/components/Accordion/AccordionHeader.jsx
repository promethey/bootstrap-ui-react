import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Text from 'components/Text';
import AccordionButton from './AccordionButton';

function AccordionHeader({
  as: ComponentType, children, style, className, ...rest
}) {
  const classes = classNames(
    'accordion-header',
    className,
  );

  return (
    <Text as={ComponentType} className={classes} style={style} {...rest}>
      <AccordionButton>
        {children}
      </AccordionButton>
    </Text>
  );
}

AccordionHeader.propTypes = {
  /** Change JSX component type */
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),

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

AccordionHeader.defaultProps = {
  as: 'h2',
  style: null,
  className: null,
};

export default AccordionHeader;