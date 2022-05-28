import React, { useEffect, createRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from 'helpers/prefix';
import CloseButton from 'components/CloseButton';
import Box from 'components/Box';
import AlertLink from './AlertLink';
import AlertHeading from './AlertHeading';

function Alert(props) {
  const {
    style,
    children,
    className,
    theme,
    isDismissible,
    isAnimated,
    onClose,
    ...rest
  } = props;

  const BASE_CLASS_NAME = 'alert';

  const alertRef = createRef(null);

  const classes = classNames(
    BASE_CLASS_NAME,
    usePrefix(BASE_CLASS_NAME, theme),
    {
      [usePrefix(BASE_CLASS_NAME, 'dismissible')]: isDismissible,
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
    <Box
      role="alert"
      ref={alertRef}
      className={classes}
      style={style}
      {...rest}
    >
      {children}
      {isDismissible && (
        <CloseButton dataDismiss="alert" />
      )}
    </Box>
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
