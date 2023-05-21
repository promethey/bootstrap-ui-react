import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from '../prefix';

function Link(props) {
  const {
    style,
    children,
    className,
    to,
    linkColor,
    ...rest
  } = props;

  const classes = classNames(
    {
      [usePrefix('link', linkColor)]: linkColor,
    },
    className,
  );

  return (
    <a href={to} style={style} className={classes} {...rest}>
      {children}
    </a>
  );
}

Link.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add link label */
  children: PropTypes.node.isRequired,

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /** Alias for href attribute */
  to: PropTypes.string.isRequired,

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

Link.defaultProps = {
  style: null,
  className: null,
  linkColor: null,
};

export default Link;
