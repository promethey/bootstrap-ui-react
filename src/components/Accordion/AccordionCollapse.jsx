import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Collapse from 'components/Collapse';

/**
 * PropTypes
 */
const propTypes = {
  /**
   * Add Accordion content
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
 * AccordionCollapse component
 * Basis on Collapse component
 *
 * @author Sedelkov Egor <sedelkovegor@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 * @see [Bootstrap]{@link https://getbootstrap.com/docs/5.3/components/accordion}
 */
function AccordionCollapse({
  children,
  style,
  className,
  ...rest
}) {
  const classes = classNames(
    'accordion-collapse',
    className,
  );

  return (
    <Collapse
      className={classes}
      style={style}
      {...rest}
    >
      {children}
    </Collapse>
  );
}

AccordionCollapse.propTypes = propTypes;
AccordionCollapse.defaultProps = defaultProps;

export default AccordionCollapse;
