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

/**
 * PropTypes
 */
const propTypes = {
  /**
   * Add dropdown children components
   */
  children: PropTypes.node.isRequired,

  /**
   * Add other styles
   */
  style: PropTypes.shape({}),

  /**
   * Add other classnames
   */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.array,
  ]),
};

/**
 * DefaultProps
 */
const defaultProps = {
  style: null,
  className: null,
};

/**
 * Dropdown component
 * Basis on Box component
 *
 * @author Sedelkov Egor <sedelkovegor@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 * @link https://getbootstrap.com/docs/5.3/components/dropdowns
 *
 * Changelog:
 * - Refactoring component [26/05/2023]
 */
export default function Dropdown({
  style,
  children,
  className,
  ...rest
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

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;

Dropdown.Toggle = DropdownToggle;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;
Dropdown.Divider = DropdownDivider;
Dropdown.Text = DropdownText;
Dropdown.Header = DropdownHeader;
