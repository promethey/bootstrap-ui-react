import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getPrefix } from '../prefix';

function CardBody(props) {
  const {
    style, children, className, textColor,
  } = props;

  const bodyTextColor = getPrefix('text', textColor);

  const classes = classNames(
    'card-body',
    { [bodyTextColor]: textColor },
    className,
  );

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
}

CardBody.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add children components */
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

CardBody.defaultProps = {
  style: null,
  className: null,
  textColor: null,
};

export default CardBody;
