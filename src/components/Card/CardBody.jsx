import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from 'helpers/prefix';

function CardBody(props) {
  const {
    style,
    children,
    className,
    textColor,
    ...rest
  } = props;

  const BASE_CLASS_NAME = 'card-body';

  const classes = classNames(
    BASE_CLASS_NAME,
    { [usePrefix('text', textColor)]: textColor },
    className,
  );

  return (
    <div className={classes} style={style} {...rest}>
      {children}
    </div>
  );
}

CardBody.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add other subcomponents */
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
