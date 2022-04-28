import React, { useEffect, createRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CloseButton from '../CloseButton';
import AlertLink from './AlertLink';
import AlertHeading from './AlertHeading';

function Alert(props) {
  const {
    style, children, className, theme, isDismissible, isAnimated, onClose,
  } = props;

  const alertRef = createRef(null);

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

  useEffect(() => {
    if (onClose) {
      const alert = alertRef.current;
      const listener = () => onClose();
      alert.addEventListener('close.bs.alert', listener);

      return () => {
        alert.removeEventListener('close.bs.alert', listener);
      };
    }

    return null;
  }, []);

  return (
    <div ref={alertRef} className={classes} style={style} role="alert">
      {children}
      {isDismissible && (
        <CloseButton dataDismiss="alert" />
      )}
    </div>
  );
}

Alert.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add children components */
  children: PropTypes.node.isRequired,

  /** Add other classes */
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

  /** Add event handler for close */
  onClose: PropTypes.func,
};

Alert.defaultProps = {
  style: null,
  className: null,
  theme: 'primary',
  isDismissible: false,
  isAnimated: false,
  onClose: null,
};

Alert.Link = AlertLink;
Alert.Heading = AlertHeading;

export default Alert;
