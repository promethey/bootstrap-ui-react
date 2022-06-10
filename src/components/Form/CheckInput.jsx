import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from 'components/Box';

function CheckInput(props) {
  const {
    style,
    className,
    id,
    type,
    value,
    isChecked,
    isDisabled,
    onChange,
    ...rest
  } = props;

  const BASE_CLASS_NAME = 'form-check-input';

  const classes = classNames(
    BASE_CLASS_NAME,
    className,
  );

  return (
    <Box
      as="input"
      className={classes}
      style={style}
      id={id}
      type={type}
      value={value}
      checked={isChecked}
      disabled={isDisabled}
      onChange={onChange}
      {...rest}
    />
  );
}

CheckInput.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /** Set id */
  id: PropTypes.string.isRequired,

  /** Change type */
  type: PropTypes.oneOf(['checkbox', 'radio']),

  /** Set value */
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),

  /** Set name for radios */
  name: PropTypes.string,

  /** Set checked */
  isChecked: PropTypes.bool,

  /** Set disabled */
  isDisabled: PropTypes.bool,

  /** On change event handler */
  onChange: PropTypes.func,
};

CheckInput.defaultProps = {
  style: null,
  className: null,
  type: 'checkbox',
  value: null,
  name: null,
  isChecked: false,
  isDisabled: false,
  onChange: null,
};

CheckInput.Option = Option;

export default CheckInput;
