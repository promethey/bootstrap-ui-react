import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from '../Box';

function Option(props) {
  const {
    style,
    children,
    className,
    isSelected,
    value,
    ...rest
  } = props;

  const classes = classNames(
    className,
  );

  return (
    <Box
      as="option"
      className={classes}
      style={style}
      isSelected={isSelected}
      value={value}
      {...rest}
    >
      {children}
    </Box>
  );
}

Option.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add other components */
  children: PropTypes.node.isRequired,

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /** Make isSelected */
  isSelected: PropTypes.bool,

  /** Set value */
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

Option.defaultProps = {
  style: null,
  className: null,
  isSelected: false,
  value: null,
};

export default Option;
