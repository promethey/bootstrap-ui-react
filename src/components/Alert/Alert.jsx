import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from 'helpers/prefix';
import Box from 'components/Box';
import CloseButton from 'components/CloseButton';
import AlertLink from './AlertLink';
import AlertHeading from './AlertHeading';

function Alert(props) {
  const {
    style,
    children,
    className,
    theme,
    show,
    dissmisible,
    isAnimated,
    onClose,
    ...rest
  } = props;

  const BASE_CLASSNAME = 'alert';

  const alertRef = createRef(null);

  const classes = classNames(
    BASE_CLASSNAME,
    usePrefix(BASE_CLASSNAME, theme),
    {
      [usePrefix(BASE_CLASSNAME, 'dismissible')]: dissmisible,
      fade: isAnimated,
      show: isAnimated,
    },
    className,
  );

  return (
    show && (
      <Box
        role="alert"
        ref={alertRef}
        className={classes}
        style={style}
        {...rest}
      >
        {children}
        {dissmisible && <CloseButton onClick={() => onClose()} />}
      </Box>
    )
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

  /** Show state */
  show: PropTypes.bool,

  /** Add close button */
  dissmisible: PropTypes.bool,

  /** Add animations */
  isAnimated: PropTypes.bool,

  /** Add event handler for close */
  onClose: PropTypes.func,
};

Alert.defaultProps = {
  style: null,
  className: null,
  theme: 'primary',
  show: true,
  dissmisible: false,
  isAnimated: false,
  onClose: null,
};

Alert.Link = AlertLink;
Alert.Heading = AlertHeading;

export default Alert;
