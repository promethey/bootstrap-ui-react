import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from 'components/Box';

function CardFooter(props) {
  const {
    style,
    children,
    className,
    ...rest
  } = props;

  const BASE_CLASSNAME = 'card-footer';

  const classes = classNames(
    BASE_CLASSNAME,
    className,
  );

  return (
    <Box className={classes} style={style} {...rest}>
      {children}
    </Box>
  );
}

CardFooter.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add children components */
  children: PropTypes.node.isRequired,

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
};

CardFooter.defaultProps = {
  style: null,
  className: null,
};

export default CardFooter;
