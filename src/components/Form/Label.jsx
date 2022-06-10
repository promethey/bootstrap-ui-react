import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from 'components/Box';

function Label(props) {
  const {
    style,
    children,
    className,
    htmlFor,
    ...rest
  } = props;

  const BASE_CLASS_NAME = 'form-label';

  const classes = classNames(
    BASE_CLASS_NAME,
    className,
  );

  return (
    <Box
      as="label"
      htmlFor={htmlFor}
      style={style}
      className={classes}
      {...rest}
    >
      {children}
    </Box>
  );
}

Label.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add label content */
  children: PropTypes.string.isRequired,

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /** Alias *for* attribute */
  htmlFor: PropTypes.string.isRequired,
};

Label.defaultProps = {
  style: null,
  className: null,
};

export default Label;
