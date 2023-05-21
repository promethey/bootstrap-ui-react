import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from '../Box';

function CheckInput(props) {
  const {
    style,
    children,
    className,
    htmlFor,
    ...rest
  } = props;

  const BASE_CLASS_NAME = 'form-check-label';

  const classes = classNames(
    BASE_CLASS_NAME,
    className,
  );

  return (
    <Box
      as="label"
      className={classes}
      style={style}
      htmlFor={htmlFor}
      {...rest}
    >
      {children}
    </Box>
  );
}

CheckInput.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Set label */
  children: PropTypes.node.isRequired,

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /** Set for attribute */
  htmlFor: PropTypes.string.isRequired,
};

CheckInput.defaultProps = {
  style: null,
  className: null,
};

CheckInput.Option = Option;

export default CheckInput;
