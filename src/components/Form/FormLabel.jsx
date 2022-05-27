import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function FormLabel(props) {
  const {
    style,
    children,
    className,
    htmlFor,
    ...rest
  } = props;

  const classes = classNames(
    'form-label',
    className,
  );

  return (
    <label
      htmlFor={htmlFor}
      style={style}
      className={classes}
      {...rest}
    >
      {children}
    </label>
  );
}

FormLabel.propTypes = {
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

FormLabel.defaultProps = {
  style: null,
  className: null,
};

export default FormLabel;
