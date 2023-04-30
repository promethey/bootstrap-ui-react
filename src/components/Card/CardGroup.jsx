import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from 'components/Box';

function CardGroup({
  style, children, className, ...rest
}) {
  const BASE_CLASS_NAME = 'card-group';

  const classes = classNames(
    BASE_CLASS_NAME,
    className,
  );

  return (
    <Box className={classes} style={style} {...rest}>
      {children}
    </Box>
  );
}

CardGroup.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add other subcomponents */
  children: PropTypes.node.isRequired,

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
};

CardGroup.defaultProps = {
  style: null,
  className: null,
};

export default CardGroup;
