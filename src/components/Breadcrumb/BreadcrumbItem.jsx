import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function BreadcrumbItem(props) {
  const {
    children,
    style,
    className,
    isActive,
    ...rest
  } = props;

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

BreadcrumbItem.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add breadcrumb items */
  children: PropTypes.node.isRequired,

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /** Add active style  */
  isActive: PropTypes.bool,
};

BreadcrumbItem.defaultProps = {
  style: null,
  className: null,
  isActive: false,
};

export default BreadcrumbItem;
