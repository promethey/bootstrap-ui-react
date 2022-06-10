import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from 'helpers/prefix';
import Box from 'components/Box';

function Control(props) {
  const {
    as: Component,
    style,
    className,
    id,
    type,
    value,
    placeholder,
    title,
    size,
    rows,
    cols,
    isDisabled,
    isReadOnly,
    isPlainText,
    isMultiple,
    ...rest
  } = props;

  const BASE_CLASS_NAME = 'form-control';

  const classes = classNames(
    { [BASE_CLASS_NAME]: !isPlainText },
    {
      [usePrefix(BASE_CLASS_NAME, 'plaintext')]: isPlainText,
      [usePrefix(BASE_CLASS_NAME, size)]: size,
      [usePrefix(BASE_CLASS_NAME, 'color')]: type === 'color',
    },
    className,
  );

  return (
    <Box
      as={Component}
      type={type}
      style={style}
      className={classes}
      value={value}
      placeholder={placeholder}
      title={title}
      disabled={isDisabled}
      readOnly={isReadOnly}
      multiple={isMultiple}
      rows={rows}
      cols={cols}
      {...rest}
    />
  );
}

Control.propTypes = {
  /** Change element type */
  as: PropTypes.oneOf([
    'input',
    'textarea',
  ]),

  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /** Alias for *id* attribute */
  id: PropTypes.string.isRequired,

  /** Change control type */
  type: PropTypes.oneOf([
    'text',
    'password',
    'email',
    'file',
    'color',
  ]),

  /** Change value content */
  value: PropTypes.string,

  /** Change *placeholder* content */
  placeholder: PropTypes.string,

  /** Change title content */
  title: PropTypes.string,

  /** Change control size */
  size: PropTypes.oneOf(['sm', 'lg']),

  /** Change *rows* attribute */
  rows: PropTypes.number,

  /** Change *cols* attribute */
  cols: PropTypes.number,

  /** Activate disabled state */
  isDisabled: PropTypes.bool,

  /** Activate readonly state */
  isReadOnly: PropTypes.bool,

  /** Activate readonly plain text style */
  isPlainText: PropTypes.bool,

  /** Alias for *multiple* attribute */
  isMultiple: PropTypes.bool,
};

Control.defaultProps = {
  as: 'input',
  style: null,
  className: null,
  type: 'text',
  placeholder: null,
  title: null,
  value: null,
  size: null,
  rows: null,
  cols: null,
  isDisabled: false,
  isReadOnly: false,
  isPlainText: false,
  isMultiple: false,
};

export default Control;
