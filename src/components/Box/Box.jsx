import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getDisplayClassNames, getPrintClassNames } from 'utilities/display';
import { getSpacingClassNames } from 'utilities/spacing';
import { usePrefix } from 'helpers/prefix';

const Box = React.forwardRef((props, ref) => {
  const {
    as: Component,
    style,
    children,
    className,
    d,
    display,
    displaySm,
    displayMd,
    displayLg,
    displayXl,
    displayXxl,
    displayPrint,
    displayPrintSm,
    displayPrintMd,
    displayPrintLg,
    displayPrintXl,
    displayPrintXxl,
    w,
    width,
    maxW,
    maxWidth,
    h,
    height,
    maxH,
    maxHeight,
    position,
    top,
    end,
    bottom,
    start,
    m,
    margin,
    marginSm,
    marginMd,
    marginLg,
    marginXl,
    marginXxl,
    marginX,
    mx,
    marginY,
    my,
    mt,
    me,
    mb,
    ms,
    p,
    padding,
    paddingSm,
    paddingMd,
    paddingLg,
    paddingXl,
    paddingXxl,
    px,
    paddingX,
    py,
    paddingY,
    pt,
    pe,
    pb,
    ps,
    float,
    floatSm,
    floatMd,
    floatLg,
    floatXl,
    floatXxl,
    opacity,
    shadow,
    bgColor,
    bgGradient,
    bgOpacity,
    textColor,
    border,
    borderColor,
    borderWidth,
    rounded,
    visually,
    visible,
    invisible,
    clearfix,
    translateMiddle,
    translateMiddleX,
    translateMiddleY,
    textSelect,
    overflow,
    ...rest
  } = props;

  let classes = classNames(
    {
      [usePrefix('w', width)]: width !== null,
      [usePrefix('mw', maxWidth)]: maxWidth !== null,
      [usePrefix('h', height)]: height !== null,
      [usePrefix('mh', maxHeight)]: maxHeight !== null,
      [usePrefix('position', position)]: position,
      [usePrefix('top', top)]: top !== null,
      [usePrefix('end', end)]: end !== null,
      [usePrefix('bottom', bottom)]: bottom !== null,
      [usePrefix('start', start)]: start !== null,
      [usePrefix('float', float)]: float,
      [usePrefix('float', 'sm', floatSm)]: floatSm,
      [usePrefix('float', 'md', floatMd)]: floatMd,
      [usePrefix('float', 'lg', floatLg)]: floatLg,
      [usePrefix('float', 'xl', floatXl)]: floatXl,
      [usePrefix('float', 'xxl', floatXxl)]: floatXxl,
      [usePrefix('opacity', opacity)]: opacity,
      [usePrefix('shadow', shadow)]: shadow,
      [usePrefix('bg', bgColor)]: bgColor,
      [usePrefix('bg', 'gradient')]: bgGradient,
      [usePrefix('bg', 'opacity', bgOpacity)]: bgOpacity,
      [usePrefix('text', textColor)]: textColor,
      [usePrefix('border', border)]: typeof border === 'string',
      [usePrefix('border', borderWidth)]: borderWidth,
      [usePrefix('border', borderColor)]: borderColor,
      [usePrefix('border', border)]: typeof border === 'string' || typeof border === 'number',
      border: typeof border === 'boolean' && border,
      [usePrefix('rounded', rounded)]: typeof rounded === 'string' || typeof rounded === 'number',
      rounded: typeof rounded === 'boolean',
      [usePrefix('visually', 'hidden')]: typeof visually === 'boolean' && !visually,
      [usePrefix('visually', visually)]: typeof visually === 'string',
      visible: visible && !invisible,
      invisible: invisible && !visible,
      clearfix,
      [usePrefix('translate', 'middle')]: translateMiddle,
      [usePrefix('translate', 'middle', 'x')]: translateMiddleX,
      [usePrefix('translate', 'middle', 'y')]: translateMiddleY,
      [usePrefix('user', 'select', textSelect)]: textSelect,
      [usePrefix('overflow', overflow)]: overflow,
    },
    getDisplayClassNames(
      display,
      displaySm,
      displayMd,
      displayLg,
      displayLg,
      displayXl,
      displayXxl,
    ),
    getPrintClassNames(
      displayPrint,
      displayPrintSm,
      displayPrintMd,
      displayPrintLg,
      displayPrintXl,
      displayPrintXxl,
    ),
    getSpacingClassNames(
      'm',
      margin,
      marginSm,
      marginMd,
      marginLg,
      marginXl,
      marginXxl,
      mx,
      my,
      mt,
      me,
      mb,
      ms,
    ),
    getSpacingClassNames(
      'p',
      padding || p,
      paddingSm,
      paddingMd,
      paddingLg,
      paddingXl,
      paddingXxl,
      paddingX || px,
      paddingY || py,
      pt,
      pe,
      pb,
      ps,
    ),
    className,
  );

  if (!classes) {
    classes = null;
  }

  return (
    <Component ref={ref} style={style} className={classes} {...rest}>
      {children}
    </Component>
  );
});

Box.propTypes = {
  /** Change element type */
  as: PropTypes.oneOf([
    'div',
    'span',
    'a',
    'button',
    'input',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'strong',
    'small',
    'p',
    'form',
    'ul',
    'ol',
    'select',
    'label',
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
  d: PropTypes.oneOf([
    'none',
    'inline',
    'inline-block',
    'block',
    'grid',
    'table',
    'table-cell',
    'table-row',
    'flex',
    'inline-flex',
  ]),

  /** Change *display* style */
  display: PropTypes.oneOf([
    'none',
    'inline',
    'inline-block',
    'block',
    'grid',
    'table',
    'table-cell',
    'table-row',
    'flex',
    'inline-flex',
  ]),

  /** Change *display* style for breakpoint sm */
  displaySm: PropTypes.oneOf([
    'none',
    'inline',
    'inline-block',
    'block',
    'grid',
    'table',
    'table-cell',
    'table-row',
    'flex',
    'inline-flex',
  ]),

  /** Change *display* style for breakpoint md */
  displayMd: PropTypes.oneOf([
    'none',
    'inline',
    'inline-block',
    'block',
    'grid',
    'table',
    'table-cell',
    'table-row',
    'flex',
    'inline-flex',
  ]),

  /** Change *display* style for breakpoint lg */
  displayLg: PropTypes.oneOf([
    'none',
    'inline',
    'inline-block',
    'block',
    'grid',
    'table',
    'table-cell',
    'table-row',
    'flex',
    'inline-flex',
  ]),

  /** Change *flex-display* style for breakpoint xl */
  displayXl: PropTypes.oneOf([
    'none',
    'inline',
    'inline-block',
    'block',
    'grid',
    'table',
    'table-cell',
    'table-row',
    'flex',
    'inline-flex',
  ]),

  /** Change *display* style for breakpoint xxl */
  displayXxl: PropTypes.oneOf([
    'none',
    'inline',
    'inline-block',
    'block',
    'grid',
    'table',
    'table-cell',
    'table-row',
    'flex',
    'inline-flex',
  ]),

  /** Change *display* print style */
  displayPrint: PropTypes.oneOf([
    'none',
    'inline',
    'inline-block',
    'block',
    'grid',
    'table',
    'table-cell',
    'table-row',
    'flex',
    'inline-flex',
  ]),

  /** Change *display* print style for breakpoint sm */
  displayPrintSm: PropTypes.oneOf([
    'none',
    'inline',
    'inline-block',
    'block',
    'grid',
    'table',
    'table-cell',
    'table-row',
    'flex',
    'inline-flex',
  ]),

  /** Change *display* print style for breakpoint md */
  displayPrintMd: PropTypes.oneOf([
    'none',
    'inline',
    'inline-block',
    'block',
    'grid',
    'table',
    'table-cell',
    'table-row',
    'flex',
    'inline-flex',
  ]),

  /** Change *display* print style for breakpoint lg */
  displayPrintLg: PropTypes.oneOf([
    'none',
    'inline',
    'inline-block',
    'block',
    'grid',
    'table',
    'table-cell',
    'table-row',
    'flex',
    'inline-flex',
  ]),

  /** Change *display* print style for breakpoint xl */
  displayPrintXl: PropTypes.oneOf([
    'none',
    'inline',
    'inline-block',
    'block',
    'grid',
    'table',
    'table-cell',
    'table-row',
    'flex',
    'inline-flex',
  ]),

  /** Change *display* print style for breakpoint xxl */
  displayPrintXxl: PropTypes.oneOf([
    'none',
    'inline',
    'inline-block',
    'block',
    'grid',
    'table',
    'table-cell',
    'table-row',
    'flex',
    'inline-flex',
  ]),

  /** Change width style */
  width: PropTypes.oneOf([0, 25, 50, 75, 100, 'auto']),

  /** Change width style [SHORT VERSION] */
  w: PropTypes.oneOf([0, 25, 50, 75, 100, 'auto']),

  /** Change max width style */
  maxWidth: PropTypes.oneOf([0, 25, 50, 75, 100, 'auto']),

  /** Change max width style [SHORT VERSION] */
  maxW: PropTypes.oneOf([0, 25, 50, 75, 100, 'auto']),

  /** Change height style */
  height: PropTypes.oneOf([0, 25, 50, 75, 100, 'auto']),

  /** Change height style [SHORT VERSION] */
  h: PropTypes.oneOf([0, 25, 50, 75, 100, 'auto']),

  /** Change max height style */
  maxHeight: PropTypes.oneOf([0, 25, 50, 75, 100, 'auto']),

  /** Change max height style [SHORT VERSION] */
  maxH: PropTypes.oneOf([0, 25, 50, 75, 100, 'auto']),

  /** Change position style */
  position: PropTypes.oneOf([
    'static',
    'relative',
    'absolute',
    'fixed',
    'fixed-top',
    'fixed-bottom',
    'sticky',
    'sticky-top',
  ]),

  /** Change top position */
  top: PropTypes.oneOf([0, 50, 100]),

  /** Change top position */
  end: PropTypes.oneOf([0, 50, 100]),

  /** Change top position */
  bottom: PropTypes.oneOf([0, 50, 100]),

  /** Change top position */
  start: PropTypes.oneOf([0, 50, 100]),

  /** Set *margin* style [SHORT VERSION] */
  m: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

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
  marginX: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Set *margin* X-axis style [SHORT VERSION] */
  mx: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Set *margin* Y-axis style */
  marginY: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Set *margin* Y-axis style [SHORT VERSION] */
  my: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Set *margin* top style */
  mt: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Set *margin* end style */
  me: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Set *margin* bottom style */
  mb: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Set *margin* start style */
  ms: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Set *padding* style [SHORT VERSION] */
  p: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

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

  /** Set *padding* X-axis style [SHORT VERSION] */
  px: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),

  /** Set *padding* Y-axis style */
  paddingY: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),

  /** Set *padding* Y-axis style [SHORT VERSION] */
  py: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),

  /** Set *padding* top style */
  pt: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Set *padding* end style */
  pe: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Set *padding* bottom style */
  pb: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Set *padding* start style */
  ps: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Add float position style */
  float: PropTypes.oneOf([
    'start',
    'end',
    'none',
  ]),

  /** Add float position style for breakpoint sm */
  floatSm: PropTypes.oneOf([
    'start',
    'end',
    'none',
  ]),

  /** Add float position style for breakpoint md */
  floatMd: PropTypes.oneOf([
    'start',
    'end',
    'none',
  ]),

  /** Add float position style for breakpoint lg */
  floatLg: PropTypes.oneOf([
    'start',
    'end',
    'none',
  ]),

  /** Add float position style for breakpoint xl */
  floatXl: PropTypes.oneOf([
    'start',
    'end',
    'none',
  ]),

  /** Add float position style for breakpoint xxl */
  floatXxl: PropTypes.oneOf([
    'start',
    'end',
    'none',
  ]),

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

  /** Activate background gradient style */
  bgGradient: PropTypes.bool,

  /** Change background color opacity */
  bgOpacity: PropTypes.oneOf([
    10,
    25,
    50,
    75,
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
  border: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf([
      0,
      'top',
      'top-0',
      'end',
      'end-0',
      'bottom',
      'bottom-0',
      'start',
      'start-0',
    ]),
  ]),

  /** Change default border color */
  borderColor: PropTypes.oneOf([
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

  /** Visually hide element */
  visually: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf([
      'hidden',
      'hidden-focusable',
    ]),
  ]),

  /** Activate visible */
  visible: PropTypes.bool,

  /** Activate invisible */
  invisible: PropTypes.bool,

  /** Activate clearfix */
  clearfix: PropTypes.bool,

  /** Activate translate middle style */
  translateMiddle: PropTypes.bool,

  /** Activate translate middle style for axis-X */
  translateMiddleX: PropTypes.bool,

  /** Activate translate middle style for axis-Y */
  translateMiddleY: PropTypes.bool,

  /** Change text select */
  textSelect: PropTypes.oneOf([
    'all',
    'auto',
    'none',
  ]),

  /** Change overflow style */
  overflow: PropTypes.oneOf([
    'auto',
    'hidden',
    'visible',
    'scroll',
  ]),
};

Box.defaultProps = {
  as: 'div',
  style: null,
  className: null,
  d: null,
  display: null,
  displaySm: null,
  displayMd: null,
  displayLg: null,
  displayXl: null,
  displayXxl: null,
  displayPrint: null,
  displayPrintSm: null,
  displayPrintMd: null,
  displayPrintLg: null,
  displayPrintXl: null,
  displayPrintXxl: null,
  w: null,
  width: null,
  maxWidth: null,
  maxW: null,
  h: null,
  height: null,
  maxHeight: null,
  maxH: null,
  position: null,
  top: null,
  end: null,
  bottom: null,
  start: null,
  m: null,
  margin: null,
  marginSm: null,
  marginMd: null,
  marginLg: null,
  marginXl: null,
  marginXxl: null,
  marginX: null,
  mx: null,
  marginY: null,
  my: null,
  mt: null,
  me: null,
  mb: null,
  ms: null,
  p: null,
  padding: null,
  paddingSm: null,
  paddingMd: null,
  paddingLg: null,
  paddingXl: null,
  paddingXxl: null,
  paddingX: null,
  px: null,
  paddingY: null,
  py: null,
  pt: null,
  pe: null,
  pb: null,
  ps: null,
  float: null,
  floatSm: null,
  floatMd: null,
  floatLg: null,
  floatXl: null,
  floatXxl: null,
  opacity: null,
  shadow: null,
  bgColor: null,
  bgGradient: false,
  bgOpacity: null,
  textColor: null,
  borderWidth: null,
  border: false,
  borderColor: null,
  rounded: null,
  visually: null,
  visible: false,
  invisible: false,
  clearfix: false,
  translateMiddle: false,
  translateMiddleX: false,
  translateMiddleY: false,
  textSelect: null,
  overflow: null,
};

export default Box;
