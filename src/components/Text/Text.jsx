import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from 'helpers/prefix';
import Box from 'components/Box';

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
    align,
    alignSm,
    alignMd,
    alignLg,
    alignXl,
    transform,
    decoration,
    lead,
    wrap,
    noWrap,
    breakWord,
    monospace,
    truncate,
    ...rest
  } = props;

  const BASE_CLASS_NAME = 'text';

  let classes = classNames(
    {
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
      lead,
      [usePrefix(BASE_CLASS_NAME, 'wrap')]: wrap && !noWrap,
      [usePrefix(BASE_CLASS_NAME, 'nowrap')]: noWrap && !wrap,
      [usePrefix(BASE_CLASS_NAME, 'break')]: breakWord,
      [usePrefix('font', 'monospace')]: monospace,
      [usePrefix('text', 'truncation')]: truncate,
    },
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
    'normal',
    'light',
    'lighter',
  ]),

  /** Change font weight style */
  fontWeight: PropTypes.oneOf([
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
  align: null,
  alignSm: null,
  alignMd: null,
  alignLg: null,
  alignXl: null,
  transform: null,
  decoration: null,
  lead: false,
  wrap: false,
  noWrap: false,
  breakWord: false,
  monospace: false,
  truncate: false,
};

export default Text;
