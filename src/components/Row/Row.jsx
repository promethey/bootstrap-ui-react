import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from '../helpers/prefix';
import { getSpacingClassNames } from '../utilities/spacing';

function Row(props) {
  const {
    style,
    children,
    className,
    cols,
    colsSm,
    colsMd,
    colsLg,
    colsXl,
    colsXxl,
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
    isVisible,
    isInvisible,
  } = props;

  const BASE_CLASS_NAME = 'row';

  const classes = classNames(
    BASE_CLASS_NAME,
    {
      [usePrefix(BASE_CLASS_NAME, 'cols', cols)]: cols !== null,
      [usePrefix(BASE_CLASS_NAME, 'cols', 'sm', colsSm)]: colsSm !== null,
      [usePrefix(BASE_CLASS_NAME, 'cols', 'md', colsMd)]: colsMd !== null,
      [usePrefix(BASE_CLASS_NAME, 'cols', 'lg', colsLg)]: colsLg !== null,
      [usePrefix(BASE_CLASS_NAME, 'cols', 'xl', colsXl)]: colsXl !== null,
      [usePrefix(BASE_CLASS_NAME, 'cols', 'xxl', colsXxl)]: colsXxl !== null,
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
    <div style={style} className={classes}>
      {children}
    </div>
  );
}

Row.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add other children components */
  children: PropTypes.node.isRequired,

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /** Set the number of columns */
  cols: PropTypes.oneOf([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    11,
    12,
    'auto',
  ]),

  /** Set the number of columns for breakpoint sm */
  colsSm: PropTypes.oneOf([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    11,
    12,
    'auto',
  ]),

  /** Set the number of columns for breakpoint md */
  colsMd: PropTypes.oneOf([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    11,
    12,
    'auto',
  ]),

  /** Set the number of columns for breakpoint lg */
  colsLg: PropTypes.oneOf([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    11,
    12,
    'auto',
  ]),

  /** Set the number of columns for breakpoint xl */
  colsXl: PropTypes.oneOf([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    11,
    12,
    'auto',
  ]),

  /** Set the number of columns for breakpoint xxl */
  colsXxl: PropTypes.oneOf([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    11,
    12,
    'auto',
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

  /** Activate visible */
  isVisible: PropTypes.bool,

  /** Activate invisible */
  isInvisible: PropTypes.bool,
};

Row.defaultProps = {
  style: null,
  className: null,
  cols: null,
  colsSm: null,
  colsMd: null,
  colsLg: null,
  colsXl: null,
  colsXxl: null,
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
  isVisible: false,
  isInvisible: false,
};

export default Row;
