import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DropdownToggle from './DropdownToggle';
import DropdownMenu from './DropdownMenu';

function DropdownDivider(props) {
  const {
    style, className, ...rest
  } = props;

  const BASE_CLASS_NAME = 'dropdown-divider';

  const classes = classNames(
    BASE_CLASS_NAME,
    className,
  );

  return (
    <li>
      <hr style={style} className={classes} {...rest} />
    </li>
  );
}

DropdownDivider.propTypes = {
  style: PropTypes.shape({}),
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
};

DropdownDivider.defaultProps = {
  style: null,
  className: null,
};

DropdownDivider.Toggle = DropdownToggle;
DropdownDivider.Menu = DropdownMenu;

export default DropdownDivider;
