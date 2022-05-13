import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from '../helpers/prefix';
import { getSpacingClassNames } from '../utilities/spacing';

function Flex(props) {
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
    height,
    direction,
    directionSm,
    directionMd,
    directionLg,
    directionXl,
    directionXxl,
    justifyContent,
    justifyContentSm,
    justifyContentMd,
    justifyContentLg,
    justifyContentXl,
    justifyContentXxl,
    alignItems,
    alignItemsSm,
    alignItemsMd,
    alignItemsLg,
    alignItemsXl,
    alignItemsXxl,
    alignSelf,
    alignSelfSm,
    alignSelfMd,
    alignSelfLg,
    alignSelfXl,
    alignSelfXxl,
    isFill,
    isFillSm,
    isFillMd,
    isFillLg,
    isFillXl,
    isFillXxl,
    flexGrow,
    flexGrowSm,
    flexGrowMd,
    flexGrowLg,
    flexGrowXl,
    flexGrowXxl,
    flexShrink,
    flexShrinkSm,
    flexShrinkMd,
    flexShrinkLg,
    flexShrinkXl,
    flexShrinkXxl,
    isWrap,
    isWrapSm,
    isWrapMd,
    isWrapLg,
    isWrapXl,
    isWrapXxl,
    isNoWrap,
    isNoWrapSm,
    isNoWrapMd,
    isNoWrapLg,
    isNoWrapXl,
    isNoWrapXxl,
    isWrapReverse,
    isWrapReverseSm,
    isWrapReverseMd,
    isWrapReverseLg,
    isWrapReverseXl,
    isWrapReverseXxl,
    order,
    orderSm,
    orderMd,
    orderLg,
    orderXl,
    orderXxl,
    alignContent,
    alignContentSm,
    alignContentMd,
    alignContentLg,
    alignContentXl,
    alignContentXxl,
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
    isRounded,
    isVisible,
    isInvisible,
  } = props;

  const BASE_CLASS_NAME = usePrefix('d', display);

  const classes = classNames(
    {
      [BASE_CLASS_NAME]: display,
      [usePrefix('d-sm', displaySm)]: displaySm !== null,
      [usePrefix('d-md', displayMd)]: displayMd !== null,
      [usePrefix('d-lg', displayLg)]: displayLg !== null,
      [usePrefix('d-xl', displayXl)]: displayXl !== null,
      [usePrefix('d-xxl', displayXxl)]: displayXxl !== null,
      [usePrefix('w', width)]: width !== null,
      [usePrefix('h', height)]: height !== null,
      [usePrefix('flex', direction)]: direction,
      [usePrefix('flex-sm', directionSm)]: directionSm,
      [usePrefix('flex-md', directionMd)]: directionMd,
      [usePrefix('flex-lg', directionLg)]: directionLg,
      [usePrefix('flex-xl', directionXl)]: directionXl,
      [usePrefix('flex-xxl', directionXxl)]: directionXxl,
      [usePrefix('justify-content', justifyContent)]: justifyContent,
      [usePrefix('justify-content-sm', justifyContentSm)]: justifyContentSm,
      [usePrefix('justify-content-md', justifyContentMd)]: justifyContentMd,
      [usePrefix('justify-content-lg', justifyContentLg)]: justifyContentLg,
      [usePrefix('justify-content-xl', justifyContentXl)]: justifyContentXl,
      [usePrefix('justify-content-xxl', justifyContentXxl)]: justifyContentXxl,
      [usePrefix('align-items', alignItems)]: alignItems,
      [usePrefix('align-items-sm', alignItemsSm)]: alignItemsSm,
      [usePrefix('align-items-md', alignItemsMd)]: alignItemsMd,
      [usePrefix('align-items-lg', alignItemsLg)]: alignItemsLg,
      [usePrefix('align-items-xl', alignItemsXl)]: alignItemsXl,
      [usePrefix('align-items-xxl', alignItemsXxl)]: alignItemsXxl,
      [usePrefix('align-self', alignSelf)]: alignSelf,
      [usePrefix('align-self-sm', alignSelfSm)]: alignSelfSm,
      [usePrefix('align-self-md', alignSelfMd)]: alignSelfMd,
      [usePrefix('align-self-lg', alignSelfLg)]: alignSelfLg,
      [usePrefix('align-self-xl', alignSelfXl)]: alignSelfXl,
      [usePrefix('align-self-xxl', alignSelfXxl)]: alignSelfXxl,
      'flex-fill': isFill,
      'flex-sm-fill': isFillSm,
      'flex-md-fill': isFillMd,
      'flex-lg-fill': isFillLg,
      'flex-xl-fill': isFillXl,
      'flex-xxl-fill': isFillXxl,
      [usePrefix('flex-grow', flexGrow)]: flexGrow !== null,
      [usePrefix('flex-sm-grow', flexGrowSm)]: flexGrowSm !== null,
      [usePrefix('flex-md-grow', flexGrowMd)]: flexGrowMd !== null,
      [usePrefix('flex-lg-grow', flexGrowLg)]: flexGrowLg !== null,
      [usePrefix('flex-xl-grow', flexGrowXl)]: flexGrowXl !== null,
      [usePrefix('flex-xxl-grow', flexGrowXxl)]: flexGrowXxl !== null,
      [usePrefix('flex-shrink', flexShrink)]: flexShrink !== null,
      [usePrefix('flex-sm-shrink', flexShrinkSm)]: flexShrinkSm !== null,
      [usePrefix('flex-md-shrink', flexShrinkMd)]: flexShrinkMd !== null,
      [usePrefix('flex-lg-shrink', flexShrinkLg)]: flexShrinkLg !== null,
      [usePrefix('flex-xl-shrink', flexShrinkXl)]: flexShrinkXl !== null,
      [usePrefix('flex-xxl-shrink', flexShrinkXxl)]: flexShrinkXxl !== null,
      'flex-wrap': isWrap,
      'flex-sm-wrap': isWrapSm,
      'flex-md-wrap': isWrapMd,
      'flex-lg-wrap': isWrapLg,
      'flex-xl-wrap': isWrapXl,
      'flex-xxl-wrap': isWrapXxl,
      'flex-nowrap': isNoWrap,
      'flex-sm-nowrap': isNoWrapSm,
      'flex-md-nowrap': isNoWrapMd,
      'flex-lg-nowrap': isNoWrapLg,
      'flex-xl-nowrap': isNoWrapXl,
      'flex-xxl-nowrap': isNoWrapXxl,
      'flex-wrap-reverse': isWrapReverse,
      'flex-wrap-sm-reverse': isWrapReverseSm,
      'flex-wrap-md-reverse': isWrapReverseMd,
      'flex-wrap-lg-reverse': isWrapReverseLg,
      'flex-wrap-xl-reverse': isWrapReverseXl,
      'flex-wrap-xxl-reverse': isWrapReverseXxl,
      [usePrefix('order', order)]: order !== null,
      [usePrefix('order-sm', order)]: orderSm !== null,
      [usePrefix('order-md', order)]: orderMd !== null,
      [usePrefix('order-lg', order)]: orderLg !== null,
      [usePrefix('order-xl', order)]: orderXl !== null,
      [usePrefix('order-xxl', order)]: orderXxl !== null,
      [usePrefix('align-content', alignContent)]: alignContent,
      [usePrefix('align-content-sm', alignContentSm)]: alignContentSm,
      [usePrefix('align-content-md', alignContentMd)]: alignContentMd,
      [usePrefix('align-content-lg', alignContentLg)]: alignContentLg,
      [usePrefix('align-content-xl', alignContentXl)]: alignContentXl,
      [usePrefix('align-content-xxl', alignContentXxl)]: alignContentXxl,
      [usePrefix('opacity', opacity)]: opacity,
      [usePrefix('shadow', shadow)]: shadow,
      [usePrefix('bg', bgColor)]: bgColor,
      [usePrefix('text', textColor)]: textColor,
      [usePrefix('border', isBorder)]: typeof isBorder === 'string',
      [usePrefix('border', borderWidth)]: borderWidth,
      border: isBorder,
      [usePrefix('rounded', isRounded)]: typeof isRounded === 'string' || typeof isRounded === 'number',
      rounded: typeof isRounded === 'boolean',
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
    <Component style={style} className={classes}>
      {children}
    </Component>
  );
}

Flex.propTypes = {
  /** Change JSX type */
  as: PropTypes.oneOf([
    'div',
    'span',
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

  /** Change height style */
  height: PropTypes.oneOf([0, 25, 50, 75, 100, 'auto']),

  /** Change *direction* */
  direction: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),

  /** Change *direction* for breakpoint sm */
  directionSm: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),

  /** Change *direction* for breakpoint md */
  directionMd: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),

  /** Change *direction* for breakpoint lg */
  directionLg: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),

  /** Change *direction* for breakpoint xl */
  directionXl: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),

  /** Change *direction* for breakpoint xxl */
  directionXxl: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),

  /** Change *justify-content* style */
  justifyContent: PropTypes.oneOf([
    'start',
    'end',
    'center',
    'between',
    'around',
    'evenly',
  ]),

  /** Change *justify-content* style for breakpoint sm */
  justifyContentSm: PropTypes.oneOf([
    'start',
    'end',
    'center',
    'between',
    'around',
    'evenly',
  ]),

  /** Change *justify-content* style for breakpoint md */
  justifyContentMd: PropTypes.oneOf([
    'start',
    'end',
    'center',
    'between',
    'around',
    'evenly',
  ]),

  /** Change *justify-content* style for breakpoint lg */
  justifyContentLg: PropTypes.oneOf([
    'start',
    'end',
    'center',
    'between',
    'around',
    'evenly',
  ]),

  /** Change *justify-content* style for breakpoint xl */
  justifyContentXl: PropTypes.oneOf([
    'start',
    'end',
    'center',
    'between',
    'around',
    'evenly',
  ]),

  /** Change *justify-content* style for breakpoint xxl */
  justifyContentXxl: PropTypes.oneOf([
    'start',
    'end',
    'center',
    'between',
    'around',
    'evenly',
  ]),

  /** Change *align-items* style */
  alignItems: PropTypes.oneOf([
    'start',
    'end',
    'center',
    'baseline',
    'stretch',
  ]),

  /** Change *align-items* style for breakpoint sm */
  alignItemsSm: PropTypes.oneOf([
    'start',
    'end',
    'center',
    'baseline',
    'stretch',
  ]),

  /** Change *align-items* style for breakpoint md */
  alignItemsMd: PropTypes.oneOf([
    'start',
    'end',
    'center',
    'baseline',
    'stretch',
  ]),

  /** Change *align-items* style for breakpoint lg */
  alignItemsLg: PropTypes.oneOf([
    'start',
    'end',
    'center',
    'baseline',
    'stretch',
  ]),

  /** Change *align-items* style for breakpoint xl */
  alignItemsXl: PropTypes.oneOf([
    'start',
    'end',
    'center',
    'baseline',
    'stretch',
  ]),

  /** Change *align-items* style for breakpoint xxl */
  alignItemsXxl: PropTypes.oneOf([
    'start',
    'end',
    'center',
    'baseline',
    'stretch',
  ]),

  /** Change *align-self* style for breakpoint */
  alignSelf: PropTypes.oneOf([
    'start',
    'end',
    'center',
    'baseline',
    'stretch',
  ]),

  /** Change *align-self* style for breakpoint sm */
  alignSelfSm: PropTypes.oneOf([
    'start',
    'end',
    'center',
    'baseline',
    'stretch',
  ]),

  /** Change *align-self* style for breakpoint md */
  alignSelfMd: PropTypes.oneOf([
    'start',
    'end',
    'center',
    'baseline',
    'stretch',
  ]),

  /** Change *align-self* style for breakpoint lg */
  alignSelfLg: PropTypes.oneOf([
    'start',
    'end',
    'center',
    'baseline',
    'stretch',
  ]),

  /** Change *align-self* style for breakpoint xl */
  alignSelfXl: PropTypes.oneOf([
    'start',
    'end',
    'center',
    'baseline',
    'stretch',
  ]),

  /** Change *align-self* style for breakpoint xxl */
  alignSelfXxl: PropTypes.oneOf([
    'start',
    'end',
    'center',
    'baseline',
    'stretch',
  ]),

  /** Activate *flex-fill* style */
  isFill: PropTypes.bool,

  /** Activate *flex-fill* style for breakpoint sm */
  isFillSm: PropTypes.bool,

  /** Change *flex-fill* style for breakpoint md */
  isFillMd: PropTypes.bool,

  /** Change *flex-fill* style for breakpoint lg */
  isFillLg: PropTypes.bool,

  /** Change *flex-fill* style for breakpoint xl */
  isFillXl: PropTypes.bool,

  /** Change *flex-fill* style for breakpoint xxl */
  isFillXxl: PropTypes.bool,

  /** Change *flex-grow* style */
  flexGrow: PropTypes.oneOf([0, 1]),

  /** Change *flex-grow* style for breakpoint sm */
  flexGrowSm: PropTypes.oneOf([0, 1]),

  /** Change *flex-grow* style for breakpoint md */
  flexGrowMd: PropTypes.oneOf([0, 1]),

  /** Change *flex-grow* style for breakpoint lg */
  flexGrowLg: PropTypes.oneOf([0, 1]),

  /** Change *flex-grow* style for breakpoint xl */
  flexGrowXl: PropTypes.oneOf([0, 1]),

  /** Change *flex-grow* style for breakpoint xxl */
  flexGrowXxl: PropTypes.oneOf([0, 1]),

  /** Change *flex-shrink* style */
  flexShrink: PropTypes.oneOf([0, 1]),

  /** Change *flex-shrink* style for breakpoint sm */
  flexShrinkSm: PropTypes.oneOf([0, 1]),

  /** Change *flex-shrink* style for breakpoint md */
  flexShrinkMd: PropTypes.oneOf([0, 1]),

  /** Change *flex-shrink* style for breakpoint lg */
  flexShrinkLg: PropTypes.oneOf([0, 1]),

  /** Change *flex-shrink* style for breakpoint xl */
  flexShrinkXl: PropTypes.oneOf([0, 1]),

  /** Change *flex-shrink* style for breakpoint xxl */
  flexShrinkXxl: PropTypes.oneOf([0, 1]),

  /** Activate *flex-wrap* style */
  isWrap: PropTypes.bool,

  /** Activate *flex-wrap* style for breakpoint sm */
  isWrapSm: PropTypes.bool,

  /** Activate *flex-wrap* style for breakpoint md */
  isWrapMd: PropTypes.bool,

  /** Activate *flex-wrap* style for breakpoint lg */
  isWrapLg: PropTypes.bool,

  /** Activate *flex-wrap* style for breakpoint xl */
  isWrapXl: PropTypes.bool,

  /** Activate *flex-wrap* style for breakpoint xxl */
  isWrapXxl: PropTypes.bool,

  /** Activate *flex-nowrap* style */
  isNoWrap: PropTypes.bool,

  /** Activate *flex-nowrap* style for breakpoint sm */
  isNoWrapSm: PropTypes.bool,

  /** Activate *flex-nowrap* style for breakpoint md */
  isNoWrapMd: PropTypes.bool,

  /** Activate *flex-nowrap* style for breakpoint lg */
  isNoWrapLg: PropTypes.bool,

  /** Activate *flex-nowrap* style for breakpoint xl */
  isNoWrapXl: PropTypes.bool,

  /** Activate *flex-nowrap* style for breakpoint xxl */
  isNoWrapXxl: PropTypes.bool,

  /** Activate *flex-wrap-reverse* style */
  isWrapReverse: PropTypes.bool,

  /** Activate *flex-wrap-reverse* style for breakpoint sm */
  isWrapReverseSm: PropTypes.bool,

  /** Activate *flex-wrap-reverse* style for breakpoint md */
  isWrapReverseMd: PropTypes.bool,

  /** Activate *flex-wrap-reverse* style for breakpoint lg */
  isWrapReverseLg: PropTypes.bool,

  /** Activate *flex-wrap-reverse* style for breakpoint xl */
  isWrapReverseXl: PropTypes.bool,

  /** Activate *flex-wrap-reverse* style for breakpoint xxl */
  isWrapReverseXxl: PropTypes.bool,

  /** Set *order* */
  order: PropTypes.oneOf([
    1,
    2,
    3,
    4,
    5,
    'first',
    'last',
  ]),

  /** Set *order* for breakpoint sm */
  orderSm: PropTypes.oneOf([
    1,
    2,
    3,
    4,
    5,
    'first',
    'last',
  ]),

  /** Set *order* for breakpoint md */
  orderMd: PropTypes.oneOf([
    1,
    2,
    3,
    4,
    5,
    'first',
    'last',
  ]),

  /** Set *order* for breakpoint lg */
  orderLg: PropTypes.oneOf([
    1,
    2,
    3,
    4,
    5,
    'first',
    'last',
  ]),

  /** Set *order* for breakpoint xl */
  orderXl: PropTypes.oneOf([
    1,
    2,
    3,
    4,
    5,
    'first',
    'last',
  ]),

  /** Set *order* for breakpoint xxl */
  orderXxl: PropTypes.oneOf([
    1,
    2,
    3,
    4,
    5,
    'first',
    'last',
  ]),

  /** Change *align-content* style */
  alignContent: PropTypes.oneOf([
    'start',
    'end',
    'between',
    'around',
    'stretch',
  ]),

  /** Change *align-content* style for breakpoint sm */
  alignContentSm: PropTypes.oneOf([
    'start',
    'end',
    'between',
    'around',
    'stretch',
  ]),

  /** Change *align-content* style for breakpoint md */
  alignContentMd: PropTypes.oneOf([
    'start',
    'end',
    'between',
    'around',
    'stretch',
  ]),

  /** Change *align-content* style for breakpoint lg */
  alignContentLg: PropTypes.oneOf([
    'start',
    'end',
    'between',
    'around',
    'stretch',
  ]),

  /** Change *align-content* style for breakpoint xl */
  alignContentXl: PropTypes.oneOf([
    'start',
    'end',
    'between',
    'around',
    'stretch',
  ]),

  /** Change *align-content* style for breakpoint xxl */
  alignContentXxl: PropTypes.oneOf([
    'start',
    'end',
    'between',
    'around',
    'stretch',
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
  isRounded: PropTypes.oneOfType([
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

Flex.defaultProps = {
  as: 'div',
  style: null,
  className: null,
  display: 'flex',
  displaySm: null,
  displayMd: null,
  displayLg: null,
  displayXl: null,
  displayXxl: null,
  width: null,
  height: null,
  direction: null,
  directionSm: null,
  directionMd: null,
  directionLg: null,
  directionXl: null,
  directionXxl: null,
  justifyContent: null,
  justifyContentSm: null,
  justifyContentMd: null,
  justifyContentLg: null,
  justifyContentXl: null,
  justifyContentXxl: null,
  alignItems: null,
  alignItemsSm: null,
  alignItemsMd: null,
  alignItemsLg: null,
  alignItemsXl: null,
  alignItemsXxl: null,
  alignSelf: null,
  alignSelfSm: null,
  alignSelfMd: null,
  alignSelfLg: null,
  alignSelfXl: null,
  alignSelfXxl: null,
  isFill: false,
  isFillSm: false,
  isFillMd: false,
  isFillLg: false,
  isFillXl: false,
  isFillXxl: false,
  flexGrow: null,
  flexGrowSm: null,
  flexGrowMd: null,
  flexGrowLg: null,
  flexGrowXl: null,
  flexGrowXxl: null,
  flexShrink: null,
  flexShrinkSm: null,
  flexShrinkMd: null,
  flexShrinkLg: null,
  flexShrinkXl: null,
  flexShrinkXxl: null,
  isWrap: false,
  isWrapSm: false,
  isWrapMd: false,
  isWrapLg: false,
  isWrapXl: false,
  isWrapXxl: false,
  isNoWrap: false,
  isNoWrapSm: false,
  isNoWrapMd: false,
  isNoWrapLg: false,
  isNoWrapXl: false,
  isNoWrapXxl: false,
  isWrapReverse: false,
  isWrapReverseSm: false,
  isWrapReverseMd: false,
  isWrapReverseLg: false,
  isWrapReverseXl: false,
  isWrapReverseXxl: false,
  order: null,
  orderSm: null,
  orderMd: null,
  orderLg: null,
  orderXl: null,
  orderXxl: null,
  alignContent: null,
  alignContentSm: null,
  alignContentMd: null,
  alignContentLg: null,
  alignContentXl: null,
  alignContentXxl: null,
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
  isRounded: null,
  isVisible: false,
  isInvisible: false,
};

export default Flex;
