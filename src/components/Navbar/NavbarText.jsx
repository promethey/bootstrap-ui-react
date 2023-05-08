import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Text from 'components/Text';

function NavbarText({ children, style, className }) {
  const BASE_CLASS_NAME = 'navbar-text';

  const classes = classNames(
    BASE_CLASS_NAME,
    className,
  );

  return (
    <Text as="span" className={classes} style={style}>
      {children}
    </Text>
  );
}

NavbarText.propTypes = {
  /** Add text content */
  children: PropTypes.node.isRequired,

  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add other classnames */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({}),
    PropTypes.array,
  ]),
};

NavbarText.defaultProps = {
  style: null,
  className: null,
};

export default NavbarText;
