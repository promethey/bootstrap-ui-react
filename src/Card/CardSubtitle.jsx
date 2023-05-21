import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from '../prefix';
import Text from '../Text';

function CardSubtitle({
  as: Component,
  style,
  children,
  className,
  textColor,
  ...rest
}) {
  const BASE_CLASS_NAME = 'card-title';

  const classes = classNames(
    BASE_CLASS_NAME,
    { [usePrefix('text', textColor)]: textColor },
    className,
  );

  return (
    <Text as={Component} className={classes} style={style} {...rest}>
      {children}
    </Text>
  );
}

CardSubtitle.propTypes = {
  /** Component JSX type */
  as: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
  ]),

  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add title */
  children: PropTypes.node.isRequired,

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

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

CardSubtitle.defaultProps = {
  as: 'h6',
  style: null,
  className: null,
  textColor: 'muted',
};

export default CardSubtitle;
