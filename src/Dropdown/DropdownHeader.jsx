import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function DropdownHeader({
  style, children, className, ...rest
}) {
  const BASE_CLASS_NAME = 'dropdown-header';

  const classes = classNames(
    BASE_CLASS_NAME,
    className,
  );

  return (
    <li>
      <h6 style={style} className={classes} {...rest}>
        {children}
      </h6>
    </li>
  );
}

DropdownHeader.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add text content for title */
  children: PropTypes.node.isRequired,

  /** Add other classnames */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
};

DropdownHeader.defaultProps = {
  style: null,
  className: null,
};

export default DropdownHeader;
