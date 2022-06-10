import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from 'components/Box';
import { usePrefix } from 'helpers/prefix';
import Option from './Option';

function Select(props) {
  const {
    style,
    children,
    className,
    size,
    length,
    isMultiple,
    isDisabled,
    ...rest
  } = props;

  const BASE_CLASS_NAME = 'form-select';

  const classes = classNames(
    BASE_CLASS_NAME,
    {
      [usePrefix(BASE_CLASS_NAME, size)]: size,
    },
    className,
  );

  return (
    <Box
      as="select"
      className={classes}
      style={style}
      multiple={isMultiple}
      size={length}
      disabled={isDisabled}
      {...rest}
    >
      {children}
    </Box>
  );
}

Select.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add options */
  children: PropTypes.node.isRequired,

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /** Change default size */
  size: PropTypes.oneOf(['sm', 'lg']),

  /** Alias for attribute *size* */
  length: PropTypes.number,

  /** Make multiple */
  isMultiple: PropTypes.bool,

  /** Make disabled */
  isDisabled: PropTypes.bool,
};

Select.defaultProps = {
  style: null,
  className: null,
  size: null,
  length: null,
  isMultiple: false,
  isDisabled: false,
};

Select.Option = Option;

export default Select;
