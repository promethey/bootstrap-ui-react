import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from '../../helpers/prefix';

function Spinner(props) {
  const {
    style,
    className,
    theme,
    type,
    isSmall,
    ...rest
  } = props;

  const BASE_CLASS_NAME = 'spinner';

  const classes = classNames(
    usePrefix(BASE_CLASS_NAME, type),
    {
      [usePrefix('text', theme)]: theme,
      [usePrefix(BASE_CLASS_NAME, type, 'sm')]: isSmall,
    },
    className,
  );

  return (
    <div className={classes} style={style} role="status" {...rest}>
      <div className="visually-hidden">
        Loading...
      </div>
    </div>
  );
}

Spinner.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /** Choose theme */
  theme: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ]),

  /** Change style type */
  type: PropTypes.oneOf(['border', 'grow']),

  /** Activate small style */
  isSmall: PropTypes.bool,
};

Spinner.defaultProps = {
  style: null,
  className: null,
  theme: null,
  type: 'border',
  isSmall: false,
};

export default Spinner;
