import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Flex from 'components/Flex';
import { getBootstrapClassNames } from 'utilities/convert';

function Row(props) {
  const {
    style,
    children,
    className,
    cols,
    g,
    gx,
    gy,
    gutter,
    gutterX,
    gutterY,
    ...rest
  } = props;

  const BASE_CLASS_NAME = 'row';

  const classes = classNames(
    BASE_CLASS_NAME,
    getBootstrapClassNames('row-cols', cols),
    getBootstrapClassNames('g', gutter || g),
    getBootstrapClassNames('gx', gutterX || gx),
    getBootstrapClassNames('gy', gutterY || gy),
    className,
  );

  return (
    <Flex display={null} style={style} className={classes} {...rest}>
      {children}
    </Flex>
  );
}

Row.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add other components */
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

  /** Change gaps between columns [SHORT VERSION] */
  g: PropTypes.oneOf([
    0,
    1,
    2,
    3,
    4,
    5,
  ]),

  /** Change gaps between columns axis-X [SHORT VERSION] */
  gx: PropTypes.oneOf([
    0,
    1,
    2,
    3,
    4,
    5,
  ]),

  /** Change gaps between columns axis-Y [SHORT VERSION] */
  gy: PropTypes.oneOf([
    0,
    1,
    2,
    3,
    4,
    5,
  ]),

  /** Change gaps between columns */
  gutter: PropTypes.oneOf([
    0,
    1,
    2,
    3,
    4,
    5,
  ]),

  /** Change gaps between columns axis-X */
  gutterX: PropTypes.oneOf([
    0,
    1,
    2,
    3,
    4,
    5,
  ]),

  /** Change gaps between columns axis-Y */
  gutterY: PropTypes.oneOf([
    0,
    1,
    2,
    3,
    4,
    5,
  ]),
};

Row.defaultProps = {
  style: null,
  className: null,
  cols: null,
  g: null,
  gx: null,
  gy: null,
  gutter: null,
  gutterX: null,
  gutterY: null,
};

export default Row;
