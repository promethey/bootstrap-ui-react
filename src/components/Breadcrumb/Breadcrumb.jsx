import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BreadcrumbItem from './BreadcrumbItem';

function Breadcrumb(props) {
  const {
    children,
    style,
    className,
    ...rest
  } = props;

  const BASE_CLASS_NAME = 'breadcrumb';

  const classes = classNames(
    BASE_CLASS_NAME,
    className,
  );

  return (
    <ol style={style} className={classes} {...rest}>
      {children}
    </ol>
  );
}

Breadcrumb.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add breadcrumb items */
  children: PropTypes.node.isRequired,

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
};

Breadcrumb.defaultProps = {
  style: null,
  className: null,
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
