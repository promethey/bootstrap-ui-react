import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from '../prefix';
import Box from '../Box';
import CloseButton from '../CloseButton';
import AlertLink from './AlertLink';
import AlertHeading from './AlertHeading';

/**
 * PropTypes
 */
const propTypes = {
  /**
   * Add alert content
   * Required
   */
  children: PropTypes.node.isRequired,

  /**
   * Add other styles
   */
  style: PropTypes.shape({}),

  /**
   * Add other classes
   */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /**
   * Choose main theme
   */
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

  /**
   * Add close button
   */
  dissmisible: PropTypes.bool,

  /**
   * Add animations
   */
  animated: PropTypes.bool,

  /**
   * Fires immediately when the
   * close instance method is called
   */
  onClose: PropTypes.func,
};

/**
 * DefaultProps
 */
const defaultProps = {
  style: null,
  className: null,
  theme: 'primary',
  dissmisible: false,
  animated: false,
  onClose: null,
};

/**
 * Alert component
 * Basis on Box component
 *
 * Subcomponents:
 * - Header
 * - Link
 *
 * @author Sedelkov Egor <sedelkovegor@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 * @link https://getbootstrap.com/docs/5.3/components/alerts
 *
 * Changelog:
 * - Refactoring component [21/05/2023]
 */
export default function Alert({
  style,
  children,
  className,
  theme,
  dissmisible,
  animated,
  onClose,
  ...rest
}) {
  const BASE_CLASS_NAME = 'alert';

  const alertRef = useRef(null);

  const classes = classNames(
    BASE_CLASS_NAME,
    usePrefix(BASE_CLASS_NAME, theme),
    {
      [usePrefix(BASE_CLASS_NAME, 'dismissible')]: dissmisible,
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

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

Alert.Link = AlertLink;
Alert.Heading = AlertHeading;
