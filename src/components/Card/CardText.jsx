import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from 'helpers/prefix';

function CardText(props) {
  const {
    style,
    children,
    className,
    textColor,
    ...rest
  } = props;

  const BASE_CLASS_NAME = 'card-text';

  const classes = classNames(
    BASE_CLASS_NAME,
    { [usePrefix('text', textColor)]: textColor },
    className,
  );

  return (
    <p className={classes} style={style} {...rest}>
      {children}
    </p>
  );
}

CardText.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add text */
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

CardText.defaultProps = {
  style: null,
  className: null,
  textColor: null,
};

export default CardText;
