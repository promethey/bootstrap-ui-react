import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from '../Box';
import Text from '../Text';

/**
 * PropTypes
 */
const propTypes = {
  /**
   * Add other style
   */
  style: PropTypes.shape({}),

  /**
   * Add text content
   */
  children: PropTypes.node.isRequired,

  /**
   * Add other classes
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
 * DropdownText is children component of Dropdown
 * Basis on Box component
 */
export default function DropdownText({
  style,
  children,
  className,
  ...rest
}) {
  const BASE_CLASS_NAME = 'dropdown-item-text';

  const classes = classNames(
    BASE_CLASS_NAME,
    className,
  );

  return (
    <Box as="li">
      <Text as="span" style={style} className={classes} {...rest}>
        {children}
      </Text>
    </Box>
  );
}

DropdownText.propTypes = propTypes;
DropdownText.defaultProps = defaultProps;
