import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from 'helpers/prefix';
import { getSpacingClassNames } from 'utilities/spacing';

const Box = React.forwardRef((props, ref) => {
  const {
    as: Component,
    style,
    children,
    className,
    display,
    displaySm,
    displayMd,
    displayLg,
    displayXl,
    displayXxl,
    width,
    maxWidth,
    height,
    maxHeight,
    margin,
    marginSm,
    marginMd,
    marginLg,
    marginXl,
    marginXxl,
    marginX,
    marginY,
    mt,
    me,
    mb,
    ms,
    padding,
    paddingSm,
    paddingMd,
    paddingLg,
    paddingXl,
    paddingXxl,
    paddingX,
    paddingY,
    pt,
    pe,
    pb,
    ps,
    opacity,
    shadow,
    bgColor,
    textColor,
    borderWidth,
    isBorder,
    rounded,
    isVisible,
    isInvisible,
    ...rest
  } = props;

  const classes = classNames(
    {
      [usePrefix('d', display)]: display,
      [usePrefix('d-sm', displaySm)]: displaySm !== null,
      [usePrefix('d-md', displayMd)]: displayMd !== null,
      [usePrefix('d-lg', displayLg)]: displayLg !== null,
      [usePrefix('d-xl', displayXl)]: displayXl !== null,
      [usePrefix('d-xxl', displayXxl)]: displayXxl !== null,
      [usePrefix('w', width)]: width !== null,
      [usePrefix('mw', width)]: maxWidth !== null,
      [usePrefix('h', height)]: height !== null,
      [usePrefix('mh', height)]: maxHeight !== null,
      [usePrefix('opacity', opacity)]: opacity,
      [usePrefix('shadow', shadow)]: shadow,
      [usePrefix('bg', bgColor)]: bgColor,
      [usePrefix('text', textColor)]: textColor,
      [usePrefix('border', isBorder)]: typeof isBorder === 'string',
      [usePrefix('border', borderWidth)]: borderWidth,
      border: isBorder,
      [usePrefix('rounded', rounded)]: typeof rounded === 'string' || typeof rounded === 'number',
      rounded: typeof rounded === 'boolean',
      visible: isVisible && !isInvisible,
      invisible: isInvisible && !isVisible,
    },
    getSpacingClassNames(
      'm',
      margin,
      marginSm,
      marginMd,
      marginLg,
      marginXl,
      marginXxl,
      marginX,
      marginY,
      mt,
      me,
      mb,
      ms,
    ),
    getSpacingClassNames(
      'p',
      padding,
      paddingSm,
      paddingMd,
      paddingLg,
      paddingXl,
      paddingXxl,
      paddingX,
      paddingY,
      pt,
      pe,
      pb,
      ps,
    ),
    className,
  );

  return (
    <Component ref={ref} style={style} className={classes} {...rest}>
      {children}
    </Component>
  );
});

Box.propTypes = {
  /** Change JSX type */
  as: PropTypes.oneOf([
    'div',
    'span',
    'a',
    'button',
    'input',
  ]),

  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add other children components */
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

  /** Change width style */
  width: PropTypes.oneOf([0, 25, 50, 75, 100, 'auto']),

  /** Change max width style */
  maxWidth: PropTypes.oneOf([0, 25, 50, 75, 100, 'auto']),

  /** Change height style */
  height: PropTypes.oneOf([0, 25, 50, 75, 100, 'auto']),

  /** Change max height style */
  maxHeight: PropTypes.oneOf([0, 25, 50, 75, 100, 'auto']),

  /** Set *margin* style */
  margin: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

  /** Set *margin* style for breakpoint sm */
  marginSm: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

  /** Set *margin* style for breakpoint md */
  marginMd: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

  /** Set *margin* style for breakpoint lg */
  marginLg: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

  /** Set *margin* style for breakpoint xl */
  marginXl: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

  /** Set *margin* style for breakpoint xxl */
  marginXxl: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

  /** Set *margin* X-axis style */
  marginX: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),

  /** Set *margin* Y-axis style */
  marginY: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),

  /** Set *margin* top style */
  mt: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Set *margin* end style */
  me: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Set *margin* bottom style */
  mb: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Set *margin* start style */
  ms: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Set *padding* style */
  padding: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

  /** Set *padding* style for breakpoint sm */
  paddingSm: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

  /** Set *padding* style for breakpoint md */
  paddingMd: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

  /** Set *padding* style for breakpoint lg */
  paddingLg: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

  /** Set *padding* style for breakpoint xl */
  paddingXl: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

  /** Set *padding* style for breakpoint xxl */
  paddingXxl: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

  /** Set *padding* X-axis style */
  paddingX: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),

  /** Set *padding* Y-axis style */
  paddingY: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),

  /** Set *padding* top style */
  pt: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Set *padding* end style */
  pe: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Set *padding* bottom style */
  pb: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Set *padding* start style */
  ps: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Change opacity style */
  opacity: PropTypes.oneOf([
    25,
    50,
    75,
    100,
  ]),

  /** Add shadow style */
  shadow: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf([
      'none',
      'sm',
      'lg',
    ]),
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
    'reset',
  ]),

  /** Set border and change border color */
  isBorder: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf([
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'light',
      'dark',
      'white',
    ]),
  ]),

  /** Change border width style */
  borderWidth: PropTypes.oneOf([
    1,
    2,
    3,
    4,
    5,
  ]),

  /** Add border radius style */
  rounded: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf([
      0,
      1,
      2,
      3,
    ]),
    PropTypes.oneOf([
      'top',
      'end',
      'bottom',
      'start',
      'circle',
      'pill',
    ]),
  ]),

  /** Activate visible */
  isVisible: PropTypes.bool,

  /** Activate invisible */
  isInvisible: PropTypes.bool,
};

Box.defaultProps = {
  as: 'div',
  style: null,
  className: null,
  display: null,
  displaySm: null,
  displayMd: null,
  displayLg: null,
  displayXl: null,
  displayXxl: null,
  width: null,
  maxWidth: null,
  height: null,
  maxHeight: null,
  margin: null,
  marginSm: null,
  marginMd: null,
  marginLg: null,
  marginXl: null,
  marginXxl: null,
  marginX: null,
  marginY: null,
  mt: null,
  me: null,
  mb: null,
  ms: null,
  padding: null,
  paddingSm: null,
  paddingMd: null,
  paddingLg: null,
  paddingXl: null,
  paddingXxl: null,
  paddingX: null,
  paddingY: null,
  pt: null,
  pe: null,
  pb: null,
  ps: null,
  opacity: null,
  shadow: null,
  bgColor: null,
  textColor: null,
  borderWidth: null,
  isBorder: false,
  rounded: null,
  isVisible: false,
  isInvisible: false,
};

export default Box;
