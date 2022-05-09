import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from '../utilities/prefix';

function CardLink(props) {
  const {
    style, children, className, to, linkColor,
  } = props;

  const BASE_CLASS_NAME = 'card-link';

  const linkTextColor = usePrefix('link', linkColor);

  const classes = classNames(
    BASE_CLASS_NAME,
    { [linkTextColor]: linkColor },
    className,
  );

  return (
    <a href={to} className={classes} style={style}>
      {children}
    </a>
  );
}

CardLink.propTypes = {
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
  style: null,
  className: null,
  to: '#',
  linkColor: null,
};

export default CardLink;
