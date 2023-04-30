import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Collapse from 'components/Collapse';

function AccordionCollapse({
  children, style, className, ...rest
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

AccordionCollapse.propTypes = {
  // Add Accordion content
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

AccordionCollapse.defaultProps = {
  style: null,
  className: null,
};

export default AccordionCollapse;
