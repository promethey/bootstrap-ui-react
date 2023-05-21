import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from '../prefix';

function CardLink({
  as: Component,
  style,
  children,
  className,
  to,
  linkColor,
  ...rest
}) {
  const BASE_CLASS_NAME = 'card-link';

  const classes = classNames(
    BASE_CLASS_NAME,
    { [usePrefix('link', linkColor)]: linkColor },
    className,
  );

  return (
    <Component href={to} className={classes} style={style} {...rest}>
      {children}
    </Component>
  );
}

CardLink.propTypes = {
  // Change JSX component type
  as: PropTypes.oneOf(['a']),

  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add text */
  children: PropTypes.node.isRequired,

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /** Add path to resource */
  to: PropTypes.string,

  /** Change link color */
  linkColor: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ]),
};

CardLink.defaultProps = {
  as: 'a',
  style: null,
  className: null,
  to: '#',
  linkColor: null,
};

export default CardLink;
