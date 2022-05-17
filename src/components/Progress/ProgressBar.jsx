import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from '../../helpers/prefix';

function ProgressBar(props) {
  const {
    style,
    children,
    className,
    bgColor,
    textColor,
    valueNow,
    valueMin,
    valueMax,
    isDisplayedPercent,
    isStriped,
    isAnimated,
    ...rest
  } = props;

  const BASE_CLASS_NAME = 'progress-bar';

  const classes = classNames(
    BASE_CLASS_NAME,
    {
      [usePrefix('bg', bgColor)]: bgColor,
      [usePrefix('text', textColor)]: textColor,
      [usePrefix(BASE_CLASS_NAME, 'striped')]: isStriped,
      [usePrefix(BASE_CLASS_NAME, 'animated')]: isAnimated,
    },
    className,
  );

  const progressPercent = `${(((valueMax - valueMin) / 100) * valueNow).toString()}%`;

  return (
    <div
      className={classes}
      style={{ ...style, width: progressPercent }}
      role="progressbar"
      aria-valuenow={valueNow}
      aria-valuemin={valueMin}
      aria-valuemax={valueMax}
      {...rest}
    >
      {isDisplayedPercent ? progressPercent : children}
    </div>
  );
}

ProgressBar.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add label for progress bar */
  children: PropTypes.node,

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /** Change background color */
  bgColor: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
    'body',
    'white',
    'transparent',
  ]),

  /** Change text color */
  textColor: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
    'body',
    'muted',
    'white',
    'black-50',
    'white-50',
  ]),

  /** Edit value now. Alias for HTML attribute *aria-valuenow* */
  valueNow: PropTypes.number,

  /** Edit value min. Alias for HTML attribute *aria-valuemin* */
  valueMin: PropTypes.number,

  /** Edit value max. Alias for HTML attribute *aria-valuemax* */
  valueMax: PropTypes.number,

  /** Displayed current progress percent */
  isDisplayedPercent: PropTypes.bool,

  /** Activate striped design */
  isStriped: PropTypes.bool,

  /** Activate animate striped */
  isAnimated: PropTypes.bool,
};

ProgressBar.defaultProps = {
  style: null,
  children: null,
  className: null,
  bgColor: null,
  textColor: null,
  valueNow: 0,
  valueMin: 0,
  valueMax: 0,
  isDisplayedPercent: false,
  isStriped: false,
  isAnimated: false,
};

export default ProgressBar;
