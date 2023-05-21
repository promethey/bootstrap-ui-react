import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BreadcrumbItem from './BreadcrumbItem';
import Box from '../Box';

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
   * Change default divider
   */
  divider: PropTypes.string,
};

/**
 * DefaultProps
 */
export const defaultProps = {
  style: null,
  className: null,
  divider: null,
};

/**
 * Breadcrumb component
 * Basis on Box component
 *
 * Childrens:
 * - Item
 *
 * @author Sedelkov Egor <sedelkovegor@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 * @link https://getbootstrap.com/docs/5.3/components/breadcrumb
 *
 * Changelog:
 */
export default function Breadcrumb({
  children,
  style,
  className,
  divider,
  ...rest
}) {
  const BASE_CLASS_NAME = 'breadcrumb';

  const classes = classNames(
    BASE_CLASS_NAME,
    className,
  );

  const navStyle = {};

  /**
   * Change divider style
   */
  if (divider !== null) {
    navStyle['--bs-breadcrumb-divider'] = `'${divider}'`;
  }

  return (
    <Box as="nav" style={navStyle}>
      <ol style={style} className={classes} {...rest}>
        {children}
      </ol>
    </Box>
  );
}

Breadcrumb.propTypes = propTypes;
Breadcrumb.defaultProps = defaultProps;

Breadcrumb.Item = BreadcrumbItem;
