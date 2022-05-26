import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from 'helpers/prefix';

function Collapse(props) {
  const {
    style,
    children,
    className,
    id,
    isHorizontal,
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
    <div style={style} id={id} className={classes}>
      {children}
    </div>
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
