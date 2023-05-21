import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from '../Box';
import DropdownToggle from './DropdownToggle';
import DropdownMenu from './DropdownMenu';
import DropdownItem from './DropdownItem';
import DropdownDivider from './DropdownDivider';
import DropdownText from './DropdownText';
import DropdownHeader from './DropdownHeader';

function Dropdown({
  style, children, className, ...rest
}) {
  const BASE_CLASS_NAME = 'dropdown';

  const classes = classNames(
    BASE_CLASS_NAME,
    className,
  );

  return (
    <Box style={style} className={classes} {...rest}>
      {children}
    </Box>
  );
}

Dropdown.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add dropdown children components */
  children: PropTypes.node.isRequired,

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
};

Dropdown.defaultProps = {
  style: null,
  className: null,
};

Dropdown.Toggle = DropdownToggle;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;
Dropdown.Divider = DropdownDivider;
Dropdown.Text = DropdownText;
Dropdown.Header = DropdownHeader;

export default Dropdown;
