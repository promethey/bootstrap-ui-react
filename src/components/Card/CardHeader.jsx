import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from 'helpers/prefix';

function CardHeader(props) {
  const {
    as: Component,
    style,
    children,
    className,
    bgColor,
    textColor,
    borderColor,
    ...rest
  } = props;

  const BASE_CLASS_NAME = 'card-header';

  const classes = classNames(
    BASE_CLASS_NAME,
    {
      [usePrefix('text', textColor)]: textColor,
      [usePrefix('bg', bgColor)]: bgColor,
      [usePrefix('border', borderColor)]: borderColor,
    },
    className,
  );

  return (
    <Component className={classes} style={style} {...rest}>
      {children}
    </Component>
  );
}

CardHeader.propTypes = {
  /** Component JSX type */
  as: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'div',
  ]),

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

  /** Change background color */
  bgColor: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
    'body',
    'white',
    'transparent',
  ]),

  /** Change border color */
  borderColor: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
    'white',
  ]),
};

CardHeader.defaultProps = {
  as: 'div',
  style: null,
  className: null,
  textColor: null,
  bgColor: null,
  borderColor: null,
};

export default CardHeader;
