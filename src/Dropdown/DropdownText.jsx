import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function DropdownText(props) {
  const {
    style, children, className, ...rest
  } = props;

  const BASE_CLASS_NAME = 'dropdown-item-text';

  const classes = classNames(
    BASE_CLASS_NAME,
    className,
  );

  return (
    <li>
      <span style={style} className={classes} {...rest}>
        {children}
      </span>
    </li>
  );
}

DropdownText.propTypes = {
  /** Add other style */
  style: PropTypes.shape({}),

  /** Add text content */
  children: PropTypes.node.isRequired,

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
};

DropdownText.defaultProps = {
  style: null,
  className: null,
};

export default DropdownText;
