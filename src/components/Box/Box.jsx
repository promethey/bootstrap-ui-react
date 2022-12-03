import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getDisplayClassNames } from 'utilities/display';
import { getSpacingClassNames } from 'utilities/spacing';
import { usePrefix } from 'helpers/prefix';
import { getFloatClassNames } from 'utilities/float';

const Box = React.forwardRef((props, ref) => {
  const {
    as: Component,
    style,
    children,
    className,
    d,
    display,
    dPrint,
    displayPrint,
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
    mx,
    marginX,
    my,
    marginY,
    mt,
    marginTop,
    me,
    marginEnd,
    mb,
    marginBottom,
    ms,
    marginStart,
    p,
    padding,
    px,
    paddingX,
    py,
    paddingY,
    pt,
    paddingTop,
    pe,
    paddingEnd,
    pb,
    paddingBottom,
    ps,
    paddingStart,
    float,
    opacity,
    shadow,
    bgColor,
    bgGradient,
    bgOpacity,
    textColor,
    border,
    borderColor,
    borderOpacity,
    borderWidth,
    borderRadius,
    borderRadiusSize,
    visually,
    visible,
    invisible,
    clearFix,
    translateMiddle,
    translateMiddleX,
    translateMiddleY,
    textSelect,
    overflow,
    ...rest
  } = props;

  let classes = classNames(
    {
      [usePrefix('w', width || w)]: width !== null && w !== null,
      [usePrefix('mw', maxWidth || maxW)]: maxWidth !== null || maxW !== null,
      [usePrefix('h', height || h)]: height !== null || h !== null,
      [usePrefix('mh', maxHeight || maxH)]: maxHeight !== null || maxH !== null,
      [usePrefix('position', position)]: position,
      [usePrefix('top', top)]: top !== null,
      [usePrefix('end', end)]: end !== null,
      [usePrefix('bottom', bottom)]: bottom !== null,
      [usePrefix('start', start)]: start !== null,
      [usePrefix('opacity', opacity)]: opacity,
      [usePrefix('shadow', shadow)]: shadow,
      [usePrefix('bg', bgColor)]: bgColor,
      [usePrefix('bg', 'gradient')]: bgGradient,
      [usePrefix('bg', 'opacity', bgOpacity)]: bgOpacity,
      [usePrefix('text', textColor)]: textColor,
      [usePrefix('border', border)]: typeof border === 'string',
      [usePrefix('border', borderWidth)]: borderWidth,
      [usePrefix('border', borderColor)]: borderColor,
      [usePrefix('border', borderOpacity)]: borderOpacity,
      [usePrefix('border', border)]: typeof border === 'string' || typeof border === 'number',
      border: typeof border === 'boolean' && border,
      [usePrefix('rounded', borderRadius)]: typeof borderRadius === 'string',
      [usePrefix('rounded', borderRadiusSize)]: typeof borderRadius === 'number',
      rounded: typeof borderRadius === 'boolean',
      [usePrefix('visually', 'hidden')]: typeof visually === 'boolean' && !visually,
      [usePrefix('visually', visually)]: typeof visually === 'string',
      visible: visible && !invisible,
      invisible: invisible && !visible,
      clearFix,
      [usePrefix('translate', 'middle')]: translateMiddle,
      [usePrefix('translate', 'middle', 'x')]: translateMiddleX,
      [usePrefix('translate', 'middle', 'y')]: translateMiddleY,
      [usePrefix('user', 'select', textSelect)]: textSelect,
      [usePrefix('overflow', overflow)]: overflow,
    },
    getDisplayClassNames('d', d || display),
    getDisplayClassNames('d-print', dPrint || displayPrint),
    getFloatClassNames(float),
    getSpacingClassNames(
      'm',
      margin || m,
      marginX || mx,
      marginY || my,
      mt,
      me,
      mb,
      ms,
    ),
    getSpacingClassNames(
      'p',
      padding || p,
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

  /** Change *display* style [SHORT VERSION] */
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

  /** Change *display* print style [SHORT VERSION] */
  dPrint: PropTypes.oneOf([
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

  /** Change width style [SHORT VERSION] */
  w: PropTypes.oneOf([0, 25, 50, 75, 100, 'auto']),

  /** Change width style */
  width: PropTypes.oneOf([0, 25, 50, 75, 100, 'auto']),

  /** Change max width style [SHORT VERSION] */
  maxW: PropTypes.oneOf([0, 25, 50, 75, 100, 'auto']),

  /** Change max width style */
  maxWidth: PropTypes.oneOf([0, 25, 50, 75, 100, 'auto']),

  /** Change height style [SHORT VERSION] */
  h: PropTypes.oneOf([0, 25, 50, 75, 100, 'auto']),

  /** Change height style */
  height: PropTypes.oneOf([0, 25, 50, 75, 100, 'auto']),

  /** Change max height style [SHORT VERSION] */
  maxH: PropTypes.oneOf([0, 25, 50, 75, 100, 'auto']),

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

  /** Set *margin* style [SHORT VERSION] */
  m: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

  /** Set *margin* style */
  margin: PropTypes.oneOfType([
    PropTypes.shape({}),
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
  marginTop: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Set *margin* top style [SHORT VERSION] */
  mt: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Set *margin* end style */
  marginEnd: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Set *margin* end style [SHORT VERSION] */
  me: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Set *margin* bottom style */
  marginBottom: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Set *margin* bottom style */
  mb: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Set *margin* start style */
  marginStart: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Set *margin* start style [SHORT VERSION] */
  ms: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Set *padding* style [SHORT VERSION] */
  p: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

  /** Set *padding* style */
  padding: PropTypes.oneOfType([
    PropTypes.shape({}),
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
  paddingTop: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Set *padding* top style [SHORT VERSION] */
  pt: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Set *padding* end style */
  paddingEnd: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Set *padding* end style [SHORT VERSION] */
  pe: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Set *padding* bottom style */
  paddingBottom: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Set *padding* bottom style [SHORT VERSION] */
  pb: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Set *padding* start style */
  paddingStart: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Set *padding* start style [SHORT VERSION] */
  ps: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Add float position style */
  float: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.oneOf(['start, end, none']),
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

  /** Change background color opacity */
  borderOpacity: PropTypes.oneOf([
    10,
    25,
    50,
    75,
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
  borderRadius: PropTypes.oneOfType([
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

  /** Add border radius style */
  borderRadiusSize: PropTypes.oneOfType([
    PropTypes.oneOf([
      0,
      1,
      2,
      3,
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

  /** Activate clearFix */
  clearFix: PropTypes.bool,

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
  dPrint: null,
  displayPrint: null,
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
  marginX: null,
  mx: null,
  marginY: null,
  my: null,
  marginTop: null,
  mt: null,
  marginEnd: null,
  me: null,
  marginBottom: null,
  mb: null,
  marginStart: null,
  ms: null,
  p: null,
  padding: null,
  paddingX: null,
  px: null,
  paddingY: null,
  py: null,
  paddingTop: null,
  pt: null,
  paddingEnd: null,
  pe: null,
  paddingBottom: null,
  pb: null,
  paddingStart: null,
  ps: null,
  float: null,
  opacity: null,
  shadow: null,
  bgColor: null,
  bgGradient: false,
  bgOpacity: null,
  textColor: null,
  borderWidth: null,
  border: false,
  borderColor: null,
  borderOpacity: null,
  borderRadius: null,
  borderRadiusSize: null,
  visually: null,
  visible: false,
  invisible: false,
  clearFix: false,
  translateMiddle: false,
  translateMiddleX: false,
  translateMiddleY: false,
  textSelect: null,
  overflow: null,
};

export default Box;
