import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getDisplayClassNames } from '../../scripts/display';

function ColBreak(props) {
  const {
    style,
    className,
    display,
    displaySm,
    displayMd,
    displayLg,
    displayXl,
    displayXxl,
    ...rest
  } = props;

  const classes = classNames(
    'w-100',
    getDisplayClassNames(
      display,
      displaySm,
      displayMd,
      displayLg,
      displayXl,
      displayXxl,
    ),
    className,
  );

  return (
    <div style={style} className={classes} {...rest} />
  );
}

ColBreak.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /** Change *display* style */
  display: PropTypes.oneOf([
    'flex',
    'inline-flex',
  ]),

  /** Change *display* style for breakpoint sm */
  displaySm: PropTypes.oneOf([
    'flex',
    'inline-flex',
  ]),

  /** Change *display* style for breakpoint md */
  displayMd: PropTypes.oneOf([
    'flex',
    'inline-flex',
  ]),

  /** Change *display* style for breakpoint lg */
  displayLg: PropTypes.oneOf([
    'flex',
    'inline-flex',
  ]),

  /** Change *flex-display* style for breakpoint xl */
  displayXl: PropTypes.oneOf([
    'flex',
    'inline-flex',
  ]),

  /** Change *display* style for breakpoint xxl */
  displayXxl: PropTypes.oneOf([
    'flex',
    'inline-flex',
  ]),
};

ColBreak.defaultProps = {
  style: null,
  className: null,
  display: 'flex',
  displaySm: null,
  displayMd: null,
  displayLg: null,
  displayXl: null,
  displayXxl: null,
};

export default ColBreak;
