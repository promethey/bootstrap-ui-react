import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function DropdownText(props) {
  const {
    style, children, className, ...rest
  } = props;

  const classes = classNames(
    'dropdown-item-text',
    className,
  );

  return (
    <li>
      <span style={style} className={classes} {...rest}>
        {children}
      </span>
    </li>
  );
}

DropdownText.propTypes = {
  style: PropTypes.shape({}),
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
};

DropdownText.defaultProps = {
  style: null,
  className: null,
};

export default DropdownText;
