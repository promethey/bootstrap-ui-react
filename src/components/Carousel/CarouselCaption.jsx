import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from 'helpers/prefix';

function CarouselCaption(props) {
  const {
    style,
    children,
    className,
    display,
    displaySm,
    displayMd,
    displayLg,
    displayXl,
    displayXxl,
    ...rest
  } = props;

  const BASE_CLASS_NAME = 'carousel-caption';

  const classes = classNames(
    BASE_CLASS_NAME,
    {
      [usePrefix('d', display)]: display !== null,
      [usePrefix('d-sm', displaySm)]: displaySm !== null,
      [usePrefix('d-md', displayMd)]: displayMd !== null,
      [usePrefix('d-lg', displayLg)]: displayLg !== null,
      [usePrefix('d-xl', displayXl)]: displayXl !== null,
      [usePrefix('d-xxl', displayXxl)]: displayXxl !== null,
    },
    className,
  );

  return (
    <div style={style} className={classes} {...rest}>
      {children}
    </div>
  );
}

CarouselCaption.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add children components */
  children: PropTypes.node.isRequired,

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

CarouselCaption.defaultProps = {
  style: null,
  className: null,
  display: null,
  displaySm: null,
  displayMd: null,
  displayLg: null,
  displayXl: null,
  displayXxl: null,
};

export default CarouselCaption;
