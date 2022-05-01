import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getPrefix } from '../prefix';

function CardTitle(props) {
  const {
    as: Component, style, children, className, textColor,
  } = props;

  const BASE_CLASS_NAME = 'card-title';

  const titleTextColor = getPrefix('text', textColor);

  const classes = classNames(
    BASE_CLASS_NAME,
    { [titleTextColor]: textColor },
    className,
  );

  return (
    <Component className={classes} style={style}>
      {children}
    </Component>
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

  /** Change text color */
  textColor: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
    'body',
    'muted',
    'white',
    'black-50',
    'white-50',
  ]),
};

CardTitle.defaultProps = {
  as: 'h5',
  style: null,
  className: null,
  textColor: null,
};

export default CardTitle;
