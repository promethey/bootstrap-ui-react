import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from 'components/Box';
import { getBootstrapClassNames } from 'utilities/convert';

function Flex(props) {
  const {
    style,
    children,
    className,
    direction,
    justifyContent,
    alignItems,
    alignSelf,
    alignContent,
    flexFill,
    flexGrow,
    flexShrink,
    flexWrap,
    flexNoWrap,
    flexWrapReverse,
    order,
    ...rest
  } = props;

  const BASE_CLASSNAME = 'd-flex';

  const classes = classNames(
    BASE_CLASSNAME,
    getBootstrapClassNames('flex', direction),
    getBootstrapClassNames('justify-content', justifyContent),
    getBootstrapClassNames('align-items', alignItems),
    getBootstrapClassNames('align-self', alignSelf),
    getBootstrapClassNames('align-content', alignContent),
    getBootstrapClassNames('flex-fill', flexFill, { prefixInsertBetween: true }),
    getBootstrapClassNames('flex-grow', flexGrow, { prefixInsertBetween: true }),
    getBootstrapClassNames('flex-shrink', flexShrink, { prefixInsertBetween: true }),
    getBootstrapClassNames('flex-wrap', flexWrap, { prefixInsertBetween: true }),
    getBootstrapClassNames('flex-nowrap', flexNoWrap, { prefixInsertBetween: true }),
    getBootstrapClassNames('flex-wrap-reverse', flexWrapReverse, { prefixInsertBetween: true }),
    getBootstrapClassNames('order', order),
    className,
  );

  return (
    <Box style={style} className={classes} {...rest}>
      {children}
    </Box>
  );
}

Flex.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add other children components */
  children: PropTypes.node.isRequired,

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /** Change *direction* */
  direction: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.oneOf([
      'row',
      'row-reverse',
      'column',
      'column-reverse',
    ]),
  ]),

  /** Change *justify-content* style */
  justifyContent: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.oneOf([
      'start',
      'end',
      'center',
      'between',
      'around',
      'evenly',
    ]),
  ]),

  /** Change *align-items* style */
  alignItems: PropTypes.oneOf([
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

  /** Activate *flex-fill* style */
  flexFill: PropTypes.bool,

  /** Change *flex-grow* style */
  flexGrow: PropTypes.oneOf([0, 1]),

  /** Change *flex-shrink* style */
  flexShrink: PropTypes.oneOf([0, 1]),

  /** Activate *flex-wrap* style */
  flexWrap: PropTypes.bool,

  /** Activate *flex-nowrap* style */
  flexNoWrap: PropTypes.bool,

  /** Activate *flex-wrap-reverse* style */
  flexWrapReverse: PropTypes.bool,

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

  /** Change *align-content* style */
  alignContent: PropTypes.oneOf([
    'start',
    'end',
    'between',
    'around',
    'stretch',
  ]),
};

Flex.defaultProps = {
  style: null,
  className: null,
  direction: null,
  justifyContent: null,
  alignItems: null,
  alignSelf: null,
  flexFill: PropTypes.bool,
  flexGrow: null,
  flexShrink: null,
  flexWrap: false,
  flexNoWrap: false,
  flexWrapReverse: false,
  order: null,
  alignContent: null,
};

export default Flex;
