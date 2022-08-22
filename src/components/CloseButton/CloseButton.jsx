import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from '../../helpers/prefix';

function CloseButton(props) {
  const {
    style,
    className,
    theme,
    dataDismiss,
    isDisabled,
    ...rest
  } = props;

  const BASE_CLASS_NAME = 'btn-close';

  const classes = classNames(
    BASE_CLASS_NAME,
    { [usePrefix(BASE_CLASS_NAME, theme)]: theme },
    className,
  );

  return (
    <button
      type="button"
      className={classes}
      style={style}
      aria-label="Close"
      disabled={isDisabled}
      data-bs-dismiss={dataDismiss}
      {...rest}
    />
  );
}

CloseButton.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /** Choose main theme */
  theme: PropTypes.oneOf(['white']),

  /**
   * Trigger the JavaScript functionality for closing.
   * Alias for attribute *data-bs-dismiss*
  */
  dataDismiss: PropTypes.string,

  /** Activate disabled state. Alias for attribute *disabled* */
  isDisabled: PropTypes.bool,
};

CloseButton.defaultProps = {
  style: null,
  className: null,
  theme: null,
  dataDismiss: null,
  isDisabled: false,
};

export default CloseButton;
