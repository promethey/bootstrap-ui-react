import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DropdownToggle from './DropdownToggle';
import DropdownMenu from './DropdownMenu';
import Box from '../Box';

/**
 * PropTypes
 */
const propTypes = {
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
 * DropdownDivider is children component of Dropdown
 * Basis on Box component
 */
export default function DropdownDivider({
  style,
  className,
  ...rest
}) {
  const BASE_CLASS_NAME = 'dropdown-divider';

  const classes = classNames(
    BASE_CLASS_NAME,
    className,
  );

  return (
    <Box as="li">
      <Box as="hr" style={style} className={classes} {...rest} />
    </Box>
  );
}

DropdownDivider.propTypes = propTypes;
DropdownDivider.defaultProps = defaultProps;

DropdownDivider.Toggle = DropdownToggle;
DropdownDivider.Menu = DropdownMenu;
