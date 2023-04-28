import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from 'helpers/prefix';
import Box from 'components/Box';
import { getBootstrapClassNames } from 'utilities/convert';

function Text(props) {
  const {
    style,
    children,
    className,

    fs,
    fontSize,

    fw,
    fontWeight,

    fst,
    fontStyle,

    lh,
    lineHeight,

    textOpacity,
    textAlign,
    textTransform,

    decoration,
    lead,

    wrap,
    noWrap,

    breakWord,

    monospace,

    truncate,
    ...rest
  } = props;

  const BASE_CLASSNAME = 'text';

  let classes = classNames(
    {
      [usePrefix(BASE_CLASSNAME, 'opacity', textOpacity)]: textOpacity !== null,
      [usePrefix('fs', fs)]: fs || fontSize,
      [usePrefix('fw', fw)]: fw || fontWeight,
      [usePrefix('fst', fst)]: fst || fontStyle,
      [usePrefix('lh', lh)]: lh || lineHeight,
      [usePrefix(BASE_CLASSNAME, textTransform)]: textTransform,
      [usePrefix(BASE_CLASSNAME, 'decoration', decoration)]: decoration,
      lead,
      [usePrefix(BASE_CLASSNAME, 'wrap')]: wrap && !noWrap,
      [usePrefix(BASE_CLASSNAME, 'nowrap')]: noWrap && !wrap,
      [usePrefix(BASE_CLASSNAME, 'break')]: breakWord,
      [usePrefix('font', 'monospace')]: monospace,
      [usePrefix(BASE_CLASSNAME, 'truncation')]: truncate,
    },
    getBootstrapClassNames(BASE_CLASSNAME, textAlign),
    className,
  );

  if (classes === '') {
    classes = null;
  }

  return (
    <Box style={style} className={classes} {...rest}>
      {children}
    </Box>
  );
}

Text.propTypes = {
  /** Change JSX type */
  as: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'strong',
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

  /** Change font size style [SHORT VERSION] */
  fs: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),

  /** Change font size style [SHORT VERSION] */
  fontSize: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),

  /** Change font weight style [SHORT VERSION] */
  fw: PropTypes.oneOf([
    'bold',
    'bolder',
    'semibold',
    'normal',
    'light',
    'lighter',
  ]),

  /** Change font weight style */
  fontWeight: PropTypes.oneOf([
    'bold',
    'bolder',
    'semibold',
    'normal',
    'light',
    'lighter',
  ]),

  /** Change font style */
  fst: PropTypes.oneOf([
    'italic',
    'normal',
  ]),

  /** Change font style [SHORT VERSION] */
  fontStyle: PropTypes.oneOf([
    'italic',
    'normal',
  ]),

  /** Change line height style [SHORT VERSION] */
  lh: PropTypes.oneOf([
    1,
    '1',
    'sm',
    'base',
    'lg',
  ]),

  /** Change line height style */
  lineHeight: PropTypes.oneOf([
    1,
    '1',
    'sm',
    'base',
    'lg',
  ]),

  /** Change *text* opacity style */
  textOpacity: PropTypes.oneOf([
    25, 50, 75,
  ]),

  /** Change *text* textAlignement style */
  textAlign: PropTypes.oneOf([
    'start',
    'center',
    'end',
  ]),

  /** Change *text* textAlignement style for breakpoint sm */
  textAlignSm: PropTypes.oneOf([
    'start',
    'center',
    'end',
  ]),

  /** Change *text* textAlignement style for breakpoint md */
  textAlignMd: PropTypes.oneOf([
    'start',
    'center',
    'end',
  ]),

  /** Change *text* textAlignement style for breakpoint lg */
  textAlignLg: PropTypes.oneOf([
    'start',
    'center',
    'end',
  ]),

  /** Change *text* textAlignement style for breakpoint xl */
  textAlignXl: PropTypes.oneOf([
    'start',
    'center',
    'end',
  ]),

  /** Change *text* textTransform style */
  textTransform: PropTypes.oneOf([
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
  lead: PropTypes.bool,

  /** Activate *text* wrap */
  wrap: PropTypes.bool,

  /** Activate *text* no wrap */
  noWrap: PropTypes.bool,

  /** Activate *text* break */
  breakWord: PropTypes.bool,

  /** Activate *text* monospace style */
  monospace: PropTypes.bool,

  /**
   * Activate *text* truncation style.
   * Truncate long strings of text with an ellipsis.
   */
  truncate: PropTypes.bool,
};

Text.defaultProps = {
  as: 'p',
  style: null,
  className: null,
  fs: null,
  fontSize: null,
  fw: null,
  fontWeight: null,
  fst: null,
  fontStyle: null,
  lh: null,
  lineHeight: null,
  textOpacity: null,
  textAlign: null,
  textAlignSm: null,
  textAlignMd: null,
  textAlignLg: null,
  textAlignXl: null,
  textTransform: null,
  decoration: null,
  lead: false,
  wrap: false,
  noWrap: false,
  breakWord: false,
  monospace: false,
  truncate: false,
};

export default Text;
