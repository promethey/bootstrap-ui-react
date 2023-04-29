import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from 'helpers/prefix';
import Box from 'components/Box';
import CloseButton from 'components/CloseButton';
import AlertLink from './AlertLink';
import AlertHeading from './AlertHeading';

function Alert({
  style,
  children,
  className,
  theme,
  dissmisible,
  animated,
  onClose,
  ...rest
}) {
  const BASE_CLASSNAME = 'alert';

  const alertRef = useRef(null);

  const classes = classNames(
    BASE_CLASSNAME,
    usePrefix(BASE_CLASSNAME, theme),
    {
      [usePrefix(BASE_CLASSNAME, 'dismissible')]: dissmisible,
      'show fade': animated,
    },
    className,
  );

  return (
    <Box
      role="alert"
      ref={alertRef}
      className={classes}
      style={style}
      {...rest}
    >
      {children}
      {dissmisible && <CloseButton onClick={onClose} />}
    </Box>
  );
}

Alert.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add alert content */
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
  dissmisible: PropTypes.bool,

  /** Add animations */
  animated: PropTypes.bool,

  /**
   * Fires immediately when the
   * close instance method is called
   */
  onClose: PropTypes.func,
};

Alert.defaultProps = {
  style: null,
  className: null,
  theme: 'primary',
  dissmisible: false,
  animated: false,
  onClose: null,
};

Alert.Link = AlertLink;
Alert.Heading = AlertHeading;

export default Alert;
