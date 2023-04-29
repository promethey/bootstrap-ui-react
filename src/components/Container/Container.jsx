import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from 'helpers/prefix';
import Flex from 'components/Flex';

function Container(props) {
  const {
    style,
    children,
    className,
    fluid,
    ...rest
  } = props;

  const BASE_CLASSNAME = 'container';

  const classes = classNames(
    {
      [BASE_CLASSNAME]: !fluid,
      [usePrefix(BASE_CLASSNAME, fluid)]: typeof fluid === 'string' && fluid,
    },
    className,
  );

  return (
    <Flex style={style} className={classes} {...rest}>
      {children}
    </Flex>
  );
}

Container.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add other children components */
  children: PropTypes.node.isRequired,

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /** Activate *fluid* container or change breakpoint */
  fluid: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf([
      'sm',
      'md',
      'lg',
      'xl',
      'xxl',
    ]),
  ]),
};

Container.defaultProps = {
  style: null,
  className: null,
  fluid: false,
};

export default Container;
