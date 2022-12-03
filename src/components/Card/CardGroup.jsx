import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from 'components/Box';

function CardGroup(props) {
  const {
    style, children, className, ...rest
  } = props;

  const BASE_CLASSNAME = 'card-group';

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
