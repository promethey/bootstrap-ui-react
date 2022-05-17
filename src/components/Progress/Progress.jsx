import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ProgressBar from './ProgressBar';

function Progress(props) {
  const {
    style, children, className, ...rest
  } = props;

  const BASE_CLASS_NAME = 'progress';

  const classes = classNames(
    BASE_CLASS_NAME,
    className,
  );

  return (
    <div className={classes} style={style} {...rest}>
      {children}
    </div>
  );
}

Progress.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add progress bars */
  children: PropTypes.node.isRequired,

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
};

Progress.defaultProps = {
  style: null,
  className: null,
};

Progress.Bar = ProgressBar;

export default Progress;
