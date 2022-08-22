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
    width,
    maxWidth,
    height,
    maxHeight,
    position,
    top,
    end,
    bottom,
    start,
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
    float,
    floatSm,
    floatMd,
    floatLg,
    floatXl,
    floatXxl,
    opacity,
    shadow,
    bgColor,
    isBgGradient,
    bgOpacity,
    textColor,
    border,
    borderColor,
    borderWidth,
    rounded,
    visually,
    isVisible,
    isInvisible,
    isClearFix,
    isTranslateMiddle,
    isTranslateMiddleX,
    isTranslateMiddleY,
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
      [usePrefix('bg', 'gradient')]: isBgGradient,
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
      visible: isVisible && !isInvisible,
      invisible: isInvisible && !isVisible,
      clearfix: isClearFix,
      [usePrefix('translate', 'middle')]: isTranslateMiddle,
      [usePrefix('translate', 'middle', 'x')]: isTranslateMiddleX,
      [usePrefix('translate', 'middle', 'y')]: isTranslateMiddleY,
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

  /** Change max width style */
  maxWidth: PropTypes.oneOf([0, 25, 50, 75, 100, 'auto']),

  /** Change height style */
  height: PropTypes.oneOf([0, 25, 50, 75, 100, 'auto']),

  /** Change max height style */
  maxHeight: PropTypes.oneOf([0, 25, 50, 75, 100, 'auto']),

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
  isBgGradient: PropTypes.bool,

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
  isVisible: PropTypes.bool,

  /** Activate invisible */
  isInvisible: PropTypes.bool,

  /** Activate clearfix */
  isClearFix: PropTypes.bool,

  /** Activate translate middle style */
  isTranslateMiddle: PropTypes.bool,

  /** Activate translate middle style for axis-X */
  isTranslateMiddleX: PropTypes.bool,

  /** Activate translate middle style for axis-Y */
  isTranslateMiddleY: PropTypes.bool,

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
  width: null,
  maxWidth: null,
  height: null,
  maxHeight: null,
  position: null,
  top: null,
  end: null,
  bottom: null,
  start: null,
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
  float: null,
  floatSm: null,
  floatMd: null,
  floatLg: null,
  floatXl: null,
  floatXxl: null,
  opacity: null,
  shadow: null,
  bgColor: null,
  isBgGradient: false,
  bgOpacity: null,
  textColor: null,
  borderWidth: null,
  border: false,
  borderColor: null,
  rounded: null,
  visually: null,
  isVisible: false,
  isInvisible: false,
  isClearFix: false,
  isTranslateMiddle: false,
  isTranslateMiddleX: false,
  isTranslateMiddleY: false,
  textSelect: null,
  overflow: null,
};

export default Box;
