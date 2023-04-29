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
    checked,
    disabled,
    switched,
    inlined,
    reversed,
    ...rest
  } = props;

  const BASE_CLASSNAME = 'form-check';

  const classes = classNames(
    BASE_CLASSNAME,
    {
      [usePrefix('form', 'switch')]: switched,
      [usePrefix(BASE_CLASSNAME, 'inline')]: inlined,
      [usePrefix(BASE_CLASSNAME, 'reverse')]: reversed,
    },
    className,
  );

  return (
    <Box
      className={classes}
      style={style}
    >
      <CheckInput
        id={id}
        type={type}
        value={value}
        name={name}
        role={switched ? 'switch' : null}
        checked={checked}
        disabled={disabled}
        {...rest}
      />
      {(label || children) && (
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

  /** Add label */
  label: PropTypes.string,

  /** Set name for radios */
  name: PropTypes.string,

  /** Set checked */
  checked: PropTypes.bool,

  /** Set disabled */
  disabled: PropTypes.bool,

  /** Activate switch design */
  switched: PropTypes.bool,

  /** Activate inline design */
  inlined: PropTypes.bool,

  /** Activate reverse design */
  reversed: PropTypes.bool,

  /** On change event handler */
  onClick: PropTypes.func,
};

Check.defaultProps = {
  style: null,
  className: null,
  type: 'checkbox',
  value: null,
  label: null,
  name: null,
  checked: false,
  disabled: false,
  switched: false,
  inlined: false,
  reversed: false,
  onClick: null,
};

Check.Input = CheckInput;
Check.Label = CheckLabel;

export default Check;
