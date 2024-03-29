import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DropdownToggle from './DropdownToggle';
import DropdownMenu from './DropdownMenu';

function DropdownDivider({ style, className, ...rest }) {
  const BASE_CLASS_NAME = 'dropdown-divider';

  const classes = classNames(
    BASE_CLASS_NAME,
    className,
  );

  return (
    <li>
      <hr style={style} className={classes} {...rest} />
    </li>
  );
}

DropdownDivider.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
};

DropdownDivider.defaultProps = {
  style: null,
  className: null,
};

DropdownDivider.Toggle = DropdownToggle;
DropdownDivider.Menu = DropdownMenu;

export default DropdownDivider;
