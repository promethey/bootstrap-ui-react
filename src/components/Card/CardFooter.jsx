import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from '../helpers/prefix';

function CardFooter(props) {
  const {
    style, children, className, textColor, bgColor, borderColor,
  } = props;

  const footerTextColor = usePrefix('text', textColor);
  const footerBgColor = usePrefix('bg', bgColor);
  const footerBorderColor = usePrefix('border', borderColor);

  const classes = classNames(
    'card-footer',
    {
      [footerTextColor]: textColor,
      [footerBgColor]: bgColor,
      [footerBorderColor]: borderColor,
    },
    className,
  );

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
}

CardFooter.propTypes = {
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

CardFooter.defaultProps = {
  style: null,
  className: null,
  textColor: null,
  bgColor: null,
  borderColor: null,
};

export default CardFooter;
