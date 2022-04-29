import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getPrefix } from '../prefix';

function CardSubtitle(props) {
  const {
    as: Component, style, children, className, color,
  } = props;

  const subtitleColor = getPrefix('text', color);

  const classes = classNames(
    'card-title',
    { [subtitleColor]: color },
    className,
  );

  return (
    <Component className={classes} style={style}>
      {children}
    </Component>
  );
}

CardSubtitle.propTypes = {
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

  color: PropTypes.oneOf([
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

CardSubtitle.defaultProps = {
  as: 'h6',
  style: null,
  className: null,
  color: 'muted',
};

export default CardSubtitle;
