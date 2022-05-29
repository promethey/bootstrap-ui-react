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
    fw,
    fst,
    lh,
    textOpacity,
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
      lead: isLead,
      [usePrefix(BASE_CLASS_NAME, 'wrap')]: isWrap && !isNoWrap,
      [usePrefix(BASE_CLASS_NAME, 'nowrap')]: isNoWrap && !isWrap,
      [usePrefix(BASE_CLASS_NAME, 'break')]: isBreak,
      [usePrefix('font', 'monospace')]: isMonospace,
      [usePrefix('text', 'truncation')]: isTruncate,
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

Text.defaultProps = {
  as: 'p',
  style: null,
  className: null,
  fs: null,
  fw: null,
  fst: null,
  lh: null,
  textOpacity: null,
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

export default Text;
