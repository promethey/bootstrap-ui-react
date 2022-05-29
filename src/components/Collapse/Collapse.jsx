import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from 'helpers/prefix';
import Box from 'components/Box';

function Collapse(props) {
  const {
    style,
    children,
    className,
    id,
    isHorizontal,
    ...rest
  } = props;

  const BASE_CLASS_NAME = 'collapse';

  const classes = classNames(
    BASE_CLASS_NAME,
    {
      [usePrefix(BASE_CLASS_NAME, 'horizontal')]: isHorizontal,
    },
    className,
  );

  return (
    <Box style={style} id={id} className={classes} {...rest}>
      {children}
    </Box>
  );
}

Collapse.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add other subcomponents */
  children: PropTypes.node.isRequired,

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /** Alias for attribute *id* */
  id: PropTypes.string.isRequired,

  /** Activate horizontal style */
  isHorizontal: PropTypes.bool,
};

Collapse.defaultProps = {
  style: null,
  className: null,
  isHorizontal: false,
};

export default Collapse;
