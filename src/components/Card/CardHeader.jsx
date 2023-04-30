import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Text from 'components/Text';

function CardHeader({
  as: ComponentType,
  style,
  children,
  className,
  ...rest
}) {
  const BASE_CLASS_NAME = 'card-header';

  const classes = classNames(
    BASE_CLASS_NAME,
    className,
  );

  return (
    <Text as={ComponentType} className={classes} style={style} {...rest}>
      {children}
    </Text>
  );
}

CardHeader.propTypes = {
  /** Component JSX type */
  as: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'div',
  ]),

  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add children components */
  children: PropTypes.node.isRequired,

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
};

CardHeader.defaultProps = {
  as: 'div',
  style: null,
  className: null,
};

export default CardHeader;
