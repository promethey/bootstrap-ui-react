import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from '../../helpers/prefix';

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
  style: PropTypes.shape({}),
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  to: PropTypes.string.isRequired,
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
