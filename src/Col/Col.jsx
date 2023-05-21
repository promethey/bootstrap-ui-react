import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from '../prefix';
import { getBootstrapClassNames } from '../convert';
import Flex from '../Flex';
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
    offset,
    ...rest
  } = props;

  const BASE_CLASSNAME = 'col';

  const classes = classNames(
    {
      [usePrefix(BASE_CLASSNAME, xs)]: xs,
      [BASE_CLASSNAME]: !xs,
      [usePrefix('col', 'sm', sm)]: sm,
      [usePrefix('col', 'md', md)]: md,
      [usePrefix('col', 'lg', lg)]: lg,
      [usePrefix('col', 'xl', xl)]: xl,
      [usePrefix('col', 'xxl', xxl)]: xxl,
    },
    getBootstrapClassNames('offset', offset),
    className,
  );

  return (
    <Flex display={null} style={style} className={classes} {...rest}>
      {children}
    </Flex>
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

  /** Column size for xs */
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

  /** Column size for sm */
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

  /** Column size for md */
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

  /** Column size for lg */
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

  /** Column size for xl */
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

  /** Column size for xxl */
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
  offset: null,
};

Col.Break = ColBreak;

export default Col;
