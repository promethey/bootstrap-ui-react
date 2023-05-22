import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Text from '../Text';

/**
 * PropTypes
 */
const propTypes = {
  /**
   * Change component type
   */
  as: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
  ]),

  /**
   * Add content text
   * Required
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
  ]),
};

/**
 * DefaultProps
 */
const defaultProps = {
  as: 'h4',
  style: null,
  className: null,
};

/**
 * AlertHeading is children component of Alert
 * Basis on Text component
 */
function AlertHeading({
  as: ComponentType,
  style,
  children,
  className,
  ...rest
}) {
  const BASE_CLASS_NAME = 'alert-heading';

  const classes = classNames(
    BASE_CLASS_NAME,
    className,
  );

  return (
    <Text as={ComponentType} className={classes} style={style} {...rest}>
      {children}
    </Text>
  );
}

AlertHeading.propTypes = propTypes;
AlertHeading.defaultProps = defaultProps;

export default AlertHeading;
