import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * PropTypes
 */
export const propTypes = {
  /**
   * Add other styles
   */
  style: PropTypes.shape({}),

  /**
   * Add breadcrumb items
   */
  children: PropTypes.node.isRequired,

  /**
   * Add other classes
   */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /**
   * Add active style
   */
  isActive: PropTypes.bool,
};

/**
 * DefaultProps
 */
const defaultProps = {
  style: null,
  className: null,
  isActive: false,
};

/**
 * BreadcrumbItem is children component of Breadcrumb
 */
export default function BreadcrumbItem({
  children,
  style,
  className,
  isActive,
  ...rest
}) {
  const BASE_CLASSNAME = 'breadcrumb-item';

  const classes = classNames(
    BASE_CLASSNAME,
    { active: isActive },
    className,
  );

  return (
    <li style={style} className={classes} {...rest}>
      {children}
    </li>
  );
}

BreadcrumbItem.propTypes = propTypes;
BreadcrumbItem.defaultProps = defaultProps;
