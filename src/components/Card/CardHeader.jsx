import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getPrefix } from '../prefix';

function CardHeader(props) {
  const {
    style, children, className, textColor, bgColor, borderColor,
  } = props;

  const headerTextColor = getPrefix('text', textColor);
  const headerBgColor = getPrefix('bg', bgColor);
  const headerBorderColor = getPrefix('border', borderColor);

  const classes = classNames(
    'card-header',
    {
      [headerTextColor]: textColor,
      [headerBgColor]: bgColor,
      [headerBorderColor]: borderColor,
    },
    className,
  );

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
}

CardHeader.propTypes = {
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
  style: null,
  className: null,
  textColor: null,
  bgColor: null,
  borderColor: null,
};

export default CardHeader;
