import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Heading(props) {
  const {
    as: Component,
    style,
    children,
    className,
  } = props;

  const classes = classNames(
    className,
  );

  return (
    <Component style={style} className={classes}>
      {children}
    </Component>
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
};

Heading.defaultProps = {
  as: 'h1',
  style: null,
  className: null,
};

export default Heading;
