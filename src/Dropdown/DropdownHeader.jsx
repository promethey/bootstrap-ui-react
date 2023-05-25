import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from '../Box';
import Heading from '../Heading';

/**
 * PropTypes
 */
const propTypes = {
  /**
   * Add other styles
   */
  style: PropTypes.shape({}),

  /**
   * Add text content for title
   */
  children: PropTypes.node.isRequired,

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
 * DropdownHeader is children component of Dropdown
 * Basis on Box component
 */
export default function DropdownHeader({
  style,
  children,
  className,
  ...rest
}) {
  const BASE_CLASS_NAME = 'dropdown-header';

  const classes = classNames(
    BASE_CLASS_NAME,
    className,
  );

  return (
    <Box as="li">
      <Heading as="h6" style={style} className={classes} {...rest}>
        {children}
      </Heading>
    </Box>
  );
}

DropdownHeader.propTypes = propTypes;
DropdownHeader.defaultProps = defaultProps;
