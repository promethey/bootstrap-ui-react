import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Text from 'components/Text';

function CardTitle(props) {
  const {
    as: Component, style, children, className,
  } = props;

  const BASE_CLASSNAME = 'card-title';

  const classes = classNames(
    BASE_CLASSNAME,
    className,
  );

  return (
    <Text as={Component} className={classes} style={style}>
      {children}
    </Text>
  );
}

CardTitle.propTypes = {
  /** Change JSX component type */
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),

  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add title */
  children: PropTypes.node.isRequired,

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
};

CardTitle.defaultProps = {
  as: 'h5',
  style: null,
  className: null,
};

export default CardTitle;
