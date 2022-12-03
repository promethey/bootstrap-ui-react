import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BreadcrumbItem from './BreadcrumbItem';

function Breadcrumb(props) {
  const {
    children,
    style,
    className,
    divider,
    ...rest
  } = props;

  const BASE_CLASSNAME = 'breadcrumb';

  const classes = classNames(
    BASE_CLASSNAME,
    className,
  );

  const navStyle = {};

  // Change divider style
  if (divider !== null) {
    navStyle['--bs-breadcrumb-divider'] = `'${divider}'`;
  }

  return (
    <nav style={navStyle}>
      <ol style={style} className={classes} {...rest}>
        {children}
      </ol>
    </nav>
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

  /** Change default divider */
  divider: PropTypes.string,
};

Breadcrumb.defaultProps = {
  style: null,
  className: null,
  divider: null,
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
