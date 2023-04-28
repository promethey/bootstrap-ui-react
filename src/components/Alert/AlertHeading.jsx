import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Text from 'components/Text';

function AlertHeading(props) {
  const {
    as: ComponentType, style, children, className, ...rest
  } = props;

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
