import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getSpacingClassNames } from 'utilities/spacing';
import { usePrefix } from 'helpers/prefix';
import ColBreak from './ColBreak';

function Col(props) {
  const {
    style,
    children,
    className,
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
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
    order,
    orderSm,
    orderMd,
    orderLg,
    orderXl,
    orderXxl,
    offset,
    offsetSm,
    offsetMd,
    offsetLg,
    offsetXl,
    offsetXxl,
    bgColor,
    isBorder,
    isVisible,
    isInvisible,
    ...rest
  } = props;

  const BASE_CLASS_NAME = 'col';

  const classes = classNames(
    {
      [usePrefix(BASE_CLASS_NAME, xs)]: xs,
      [BASE_CLASS_NAME]: xs === null,
      [usePrefix('col', 'sm', sm)]: sm !== null,
      [usePrefix('col', 'md', md)]: md !== null,
      [usePrefix('col', 'lg', lg)]: lg !== null,
      [usePrefix('col', 'xl', xl)]: xl !== null,
      [usePrefix('col', 'xxl', xxl)]: xxl !== null,
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
      [usePrefix('order', order)]: order !== null,
      [usePrefix('order-sm', order)]: orderSm !== null,
      [usePrefix('order-md', order)]: orderMd !== null,
      [usePrefix('order-lg', order)]: orderLg !== null,
      [usePrefix('order-xl', order)]: orderXl !== null,
      [usePrefix('order-xxl', order)]: orderXxl !== null,
      [usePrefix('offset', offset)]: offset !== null,
      [usePrefix('offset', 'sm', offsetSm)]: offsetSm !== null,
      [usePrefix('offset', 'md', offsetMd)]: offsetMd !== null,
      [usePrefix('offset', 'lg', offsetLg)]: offsetLg !== null,
      [usePrefix('offset', 'xl', offsetXl)]: offsetXl !== null,
      [usePrefix('offset', 'xxl', offsetXxl)]: offsetXxl !== null,
      [usePrefix('bg', bgColor)]: bgColor,
      [usePrefix('border', isBorder)]: isBorder && typeof isBorder === 'string',
      border: isBorder,
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
    <div style={style} className={classes} {...rest}>
      {children}
    </div>
  );
}

Col.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add other children components */
  children: PropTypes.node.isRequired,

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /** Column size for breakpoint xs */
  xs: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      'auto',
    ]),
  ]),

  /** Column size for breakpoint sm */
  sm: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      'auto',
    ]),
  ]),

  /** Column size for breakpoint md */
  md: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      'auto',
    ]),
  ]),

  /** Column size for breakpoint lg */
  lg: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      'auto',
    ]),
  ]),

  /** Column size for breakpoint xl */
  xl: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      'auto',
    ]),
  ]),

  /** Column size for breakpoint xxl */
  xxl: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      'auto',
    ]),
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

  /** Set *margin* axis-X style */
  marginX: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Set *margin* axis-Y style */
  marginY: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

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

  /** Move columns */
  offset: PropTypes.oneOf([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
  ]),

  /** Move columns for breakpoint sm */
  offsetSm: PropTypes.oneOf([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
  ]),

  /** Move columns for breakpoint md */
  offsetMd: PropTypes.oneOf([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
  ]),

  /** Move columns for breakpoint lg */
  offsetLg: PropTypes.oneOf([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
  ]),

  /** Move columns for breakpoint xl */
  offsetXl: PropTypes.oneOf([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
  ]),

  /** Move columns for breakpoint xxl */
  offsetXxl: PropTypes.oneOf([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
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

  /** Add border and change border color */
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

  /** Activate visible */
  isVisible: PropTypes.bool,

  /** Activate invisible */
  isInvisible: PropTypes.bool,
};

Col.defaultProps = {
  style: null,
  className: null,
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xl: null,
  xxl: null,
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
  order: null,
  orderSm: null,
  orderMd: null,
  orderLg: null,
  orderXl: null,
  orderXxl: null,
  offset: null,
  offsetSm: null,
  offsetMd: null,
  offsetLg: null,
  offsetXl: null,
  offsetXxl: null,
  bgColor: null,
  isBorder: false,
  isVisible: false,
  isInvisible: false,
};

Col.Break = ColBreak;

export default Col;
