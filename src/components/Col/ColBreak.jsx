import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from '../helpers/prefix';

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
  } = props;

  const classes = classNames(
    'w-100',
    {
      [usePrefix('d', display)]: display,
      [usePrefix('d-sm', displaySm)]: displaySm,
      [usePrefix('d-md', displayMd)]: displayMd,
      [usePrefix('d-lg', displayLg)]: displayLg,
      [usePrefix('d-xl', displayXl)]: displayXl,
      [usePrefix('d-xxl', displayXxl)]: displayXxl,
    },
    className,
  );

  return (
    <div style={style} className={classes} />
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
