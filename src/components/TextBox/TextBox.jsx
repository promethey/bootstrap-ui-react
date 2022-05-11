import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getSpacingClassNames } from '../utilities/spacing';
import { getDisplayClassNames, getPrintClassNames } from '../utilities/display';
import { usePrefix } from '../helpers/prefix';

function TextBox(props) {
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
    fs,
    fw,
    fst,
    lh,
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
    textColor,
    textOpacity,
    bgColor,
    isBorder,
    align,
    alignSm,
    alignMd,
    alignLg,
    alignXl,
    transform,
    decoration,
    isLead,
    isWrap,
    isNoWrap,
    isBreak,
    isMonospace,
    isTruncate,
    ...rest
  } = props;

  const BASE_CLASS_NAME = 'text';

  const classes = classNames(
    {
      [usePrefix('bg', bgColor)]: bgColor,
      [usePrefix('border', isBorder)]: typeof isBorder === 'string',
      border: isBorder,
      [usePrefix(BASE_CLASS_NAME, textColor)]: textColor,
      [usePrefix(BASE_CLASS_NAME, 'opacity', textOpacity)]: textOpacity !== null,
      [usePrefix(BASE_CLASS_NAME, align)]: align,
      [usePrefix(BASE_CLASS_NAME, 'sm', alignSm)]: alignSm,
      [usePrefix(BASE_CLASS_NAME, 'md', alignMd)]: alignMd,
      [usePrefix(BASE_CLASS_NAME, 'lg', alignLg)]: alignLg,
      [usePrefix(BASE_CLASS_NAME, 'xl', alignXl)]: alignXl,
      [usePrefix('fs', fs)]: fs,
      [usePrefix('fw', fw)]: fw,
      [usePrefix('fst', fst)]: fst,
      [usePrefix('lh', lh)]: lh,
      [usePrefix(BASE_CLASS_NAME, transform)]: transform,
      [usePrefix(BASE_CLASS_NAME, 'decoration', decoration)]: decoration,
      lead: isLead,
      [usePrefix(BASE_CLASS_NAME, 'wrap')]: isWrap && !isNoWrap,
      [usePrefix(BASE_CLASS_NAME, 'nowrap')]: isNoWrap && !isWrap,
      [usePrefix(BASE_CLASS_NAME, 'break')]: isBreak,
      [usePrefix('font', 'monospace')]: isMonospace,
      [usePrefix('text', 'truncation')]: isTruncate,
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

  return (
    <Component style={style} className={classes} {...rest}>
      {children}
    </Component>
  );
}

TextBox.propTypes = {
  /** Change JSX type */
  as: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'small',
    'span',
    'p',
    'div',
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
    'none',
    'inline',
    'inline-block',
    'block',
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

  /** Change *display* style for breakpoint xl */
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

  /** Change font size style */
  fs: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),

  /** Change font weight style */
  fw: PropTypes.oneOf([
    'bold',
    'bolder',
    'normal',
    'light',
    'lighter',
  ]),

  /** Change font style */
  fst: PropTypes.oneOf([
    'italic',
    'normal',
  ]),

  /** Change line height style */
  lh: PropTypes.oneOf([
    1,
    '1',
    'sm',
    'base',
    'lg',
  ]),

  /** Change *margin* style */
  margin: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

  /** Change *margin* style for breakpoint sm */
  marginSm: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

  /** Change *margin* style for breakpoint md */
  marginMd: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

  /** Change *margin* style for breakpoint lg */
  marginLg: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

  /** Change *margin* style for breakpoint xl */
  marginXl: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

  /** Change *margin* style for breakpoint xxl */
  marginXxl: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

  /** Change *margin* axis-X style for breakpoint sm */
  marginX: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Change *margin* axis-Y style for breakpoint sm */
  marginY: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Change *margin* top style */
  mt: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Change *margin* end style */
  me: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Change *margin* bottom style */
  mb: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Change *margin* start style */
  ms: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Change *padding* style */
  padding: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

  /** Change *padding* style for breakpoint sm */
  paddingSm: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

  /** Change *padding* style for breakpoint md */
  paddingMd: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

  /** Change *padding* style for breakpoint lg */
  paddingLg: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

  /** Change *padding* style for breakpoint xl */
  paddingXl: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

  /** Change *padding* style for breakpoint xxl */
  paddingXxl: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

  /** Change *padding* axis-X style for breakpoint sm */
  paddingX: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Change *padding* axis-Y style for breakpoint sm */
  paddingY: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Change *padding* top style */
  pt: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Change *padding* end style */
  pe: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Change *padding* bottom style */
  pb: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Change *padding* start style */
  ps: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Change *text* color style */
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

  /** Change *text* opacity style */
  textOpacity: PropTypes.oneOf([
    25, 50, 75,
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

  /** Change border and border color */
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

  /** Change *text* alignement style */
  align: PropTypes.oneOf([
    'start',
    'center',
    'end',
  ]),

  /** Change *text* alignement style for breakpoint sm */
  alignSm: PropTypes.oneOf([
    'start',
    'center',
    'end',
  ]),

  /** Change *text* alignement style for breakpoint md */
  alignMd: PropTypes.oneOf([
    'start',
    'center',
    'end',
  ]),

  /** Change *text* alignement style for breakpoint lg */
  alignLg: PropTypes.oneOf([
    'start',
    'center',
    'end',
  ]),

  /** Change *text* alignement style for breakpoint xl */
  alignXl: PropTypes.oneOf([
    'start',
    'center',
    'end',
  ]),

  /** Change *text* transform style */
  transform: PropTypes.oneOf([
    'lowercase',
    'uppercase',
    'capitalize',
  ]),

  /** Change *text* decoration style */
  decoration: PropTypes.oneOf([
    'underline',
    'line-through',
    'none',
  ]),

  /** Activate *text* lead style */
  isLead: PropTypes.bool,

  /** Activate *text* wrap */
  isWrap: PropTypes.bool,

  /** Activate *text* no wrap */
  isNoWrap: PropTypes.bool,

  /** Activate *text* break */
  isBreak: PropTypes.bool,

  /** Activate *text* monospace style */
  isMonospace: PropTypes.bool,

  /**
   * Activate *text* truncation style.
   * Truncate long strings of text with an ellipsis.
   */
  isTruncate: PropTypes.bool,
};

TextBox.defaultProps = {
  as: 'p',
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
  fs: null,
  fw: null,
  fst: null,
  lh: null,
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
  textColor: null,
  textOpacity: null,
  bgColor: null,
  isBorder: false,
  align: null,
  alignSm: null,
  alignMd: null,
  alignLg: null,
  alignXl: null,
  transform: null,
  decoration: null,
  isLead: false,
  isWrap: false,
  isNoWrap: false,
  isBreak: false,
  isMonospace: false,
  isTruncate: false,
};

export default TextBox;
