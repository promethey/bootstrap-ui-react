import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Text from 'components/Text';
import AccordionButton from './AccordionButton';

/**
 * PropTypes
 */
const propTypes = {
  /**
   * Change JSX component type
   */
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),

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
  as: 'h2',
  style: null,
  className: null,
};

/**
 * AccordionHeader is children component of Accordion
 * Basis on Text component
 */
function AccordionHeader({
  as: ComponentType,
  children,
  style,
  className,
  ...rest
}) {
  const BASE_CLASS_NAME = 'accordion-header';

  const classes = classNames(
    BASE_CLASS_NAME,
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

AccordionHeader.propTypes = propTypes;
AccordionHeader.defaultProps = defaultProps;

export default AccordionHeader;
