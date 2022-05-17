import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function DropdownHeader(props) {
  const {
    style, children, className, ...rest
  } = props;

  const BASE_CLASS_NAME = 'dropdown-header';

  const classes = classNames(
    BASE_CLASS_NAME,
    className,
  );

  return (
    <li>
      <h6 style={style} className={classes} {...rest}>
        {children}
      </h6>
    </li>
  );
}

DropdownHeader.propTypes = {
  style: PropTypes.shape({}),
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
};

DropdownHeader.defaultProps = {
  style: null,
  className: null,
};

export default DropdownHeader;
