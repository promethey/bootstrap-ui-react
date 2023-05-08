import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from 'components/Box';

function NavbarToggler({
  style,
  className,
  ...rest
}) {
  const BASE_CLASS_NAME = 'navbar-toggler';

  const classes = classNames(BASE_CLASS_NAME, className);

  return (
    <Box as="button" className={classes} style={style} {...rest}>
      <span className="navbar-toggler-icon" />
    </Box>
  );
}

NavbarToggler.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add other classnames */
  className: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.string,
    PropTypes.array,
  ]),
};

NavbarToggler.defaultProps = {
  style: null,
  className: null,
};

export default NavbarToggler;
