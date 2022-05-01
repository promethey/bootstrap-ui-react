import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function CardGroup(props) {
  const { style, children, className } = props;

  const BASE_CLASS_NAME = 'card-group';

  const classes = classNames(BASE_CLASS_NAME, className);

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
}

CardGroup.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add other subcomponents */
  children: PropTypes.node.isRequired,

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
};

CardGroup.defaultProps = {
  style: null,
  className: null,
};

export default CardGroup;
