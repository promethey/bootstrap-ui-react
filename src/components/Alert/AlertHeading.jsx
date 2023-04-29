import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Text from 'components/Text';

function AlertHeading({
  as: ComponentType, style, children, className, ...rest
}) {
  const BASE_CLASSNAME = 'alert-heading';

  const classes = classNames(
    BASE_CLASSNAME,
    className,
  );

  return (
    <Text as={ComponentType} className={classes} style={style} {...rest}>
      {children}
    </Text>
  );
}

AlertHeading.propTypes = {
  // Change JSX type
  as: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
  ]),

  // Add other styles
  style: PropTypes.shape({}),

  // Add content text
  children: PropTypes.node.isRequired,

  // Add other classnames
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
};

AlertHeading.defaultProps = {
  as: 'h4',
  style: null,
  className: null,
};

export default AlertHeading;
