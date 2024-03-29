import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from 'helpers/prefix';
import Text from 'components/Text';

function Heading(props) {
  const {
    as: Component,
    style,
    children,
    className,
    d,
    display,
  } = props;

  const classes = classNames(
    { [usePrefix('display', display)]: display || d },
    className,
  );

  return (
    <Text as={Component} style={style} className={classes}>
      {children}
    </Text>
  );
}

Heading.propTypes = {
  as: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
  ]),
  style: PropTypes.shape({}),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  d: PropTypes.oneOf([
    1,
    2,
    3,
    4,
    5,
    6,
  ]),
  display: PropTypes.oneOf([
    1,
    2,
    3,
    4,
    5,
    6,
  ]),
};

Heading.defaultProps = {
  as: 'h1',
  style: null,
  className: null,
  d: null,
  display: null,
};

export default Heading;
