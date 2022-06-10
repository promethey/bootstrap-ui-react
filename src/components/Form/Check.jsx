import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from 'components/Box';
import { usePrefix } from 'helpers/prefix';
import CheckLabel from './CheckLabel';
import CheckInput from './CheckInput';

function Check(props) {
  const {
    style,
    children,
    className,
    id,
    type,
    value,
    label,
    name,
    isChecked,
    isDisabled,
    isSwitched,
    isInlined,
    isReversed,
    onChange,
    ...rest
  } = props;

  const BASE_CLASS_NAME = 'form-check';

  const classes = classNames(
    BASE_CLASS_NAME,
    {
      [usePrefix('form', 'switch')]: isSwitched,
      [usePrefix(BASE_CLASS_NAME, 'inline')]: isInlined,
      [usePrefix(BASE_CLASS_NAME, 'reverse')]: isReversed,
    },
    className,
  );

  return (
    <Box
      className={classes}
      style={style}
      {...rest}
    >
      <CheckInput
        id={id}
        type={type}
        value={value}
        name={name}
        role={isSwitched ? 'switch' : null}
        isChecked={isChecked}
        isDisabled={isDisabled}
        onChange={onChange}
      />
      {(!!label || !!children) && (
        <CheckLabel htmlFor={id}>
          {label || children}
        </CheckLabel>
      )}
    </Box>
  );
}

Check.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add options */
  children: PropTypes.node.isRequired,

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

  /** Set label */
  label: PropTypes.string,

  /** Set name for radios */
  name: PropTypes.string,

  /** Set checked */
  isChecked: PropTypes.bool,

  /** Set disabled */
  isDisabled: PropTypes.bool,

  /** Activate switch design */
  isSwitched: PropTypes.bool,

  /** Activate inline design */
  isInlined: PropTypes.bool,

  /** Activate reverse design */
  isReversed: PropTypes.bool,

  /** On change event handler */
  onChange: PropTypes.func,
};

Check.defaultProps = {
  style: null,
  className: null,
  type: 'checkbox',
  value: null,
  label: null,
  name: null,
  isChecked: false,
  isDisabled: false,
  isSwitched: false,
  isInlined: false,
  isReversed: false,
  onChange: null,
};

Check.Input = CheckInput;
Check.Label = CheckLabel;

export default Check;