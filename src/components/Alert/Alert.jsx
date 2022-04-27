import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CloseButton from '../CloseButton';
import AlertLink from './AlertLink';
import AlertHeading from './AlertHeading';

function Alert(props) {
  const {
    style, children, className, theme, isDismissible, isAnimated,
  } = props;

  const classes = classNames(
    'alert',
    `alert-${theme}`,
    {
      'alert-dismissible': isDismissible,
      fade: isAnimated,
      show: isAnimated,
    },
    className,
  );

  return (
    <div className={classes} style={style} role="alert">
      {children}
      {isDismissible && <CloseButton dataDismiss="alert" />}
    </div>
  );
}

Alert.propTypes = {
  /** Add custom CSS styles */
  style: PropTypes.shape({}),

  /** Add children components */
  children: PropTypes.node.isRequired,

  /** Add custom classes. Read more [classnames](https://www.npmjs.com/package/classnames) */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /** Choose main theme */
  theme: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ]),

  /** Add close button */
  isDismissible: PropTypes.bool,

  /** Add animations */
  isAnimated: PropTypes.bool,
};

Alert.defaultProps = {
  style: null,
  className: null,
  theme: 'primary',
  isDismissible: false,
  isAnimated: false,
};

Alert.Link = AlertLink;
Alert.Heading = AlertHeading;

export default Alert;
