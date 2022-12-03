import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Text from 'components/Text';

function CardText(props) {
  const {
    style,
    children,
    className,
    ...rest
  } = props;

  const BASE_CLASSNAME = 'card-text';

  const classes = classNames(
    BASE_CLASSNAME,
    className,
  );

  return (
    <Text className={classes} style={style} {...rest}>
      {children}
    </Text>
  );
}

CardText.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add text */
  children: PropTypes.node.isRequired,

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
};

CardText.defaultProps = {
  style: null,
  className: null,
};

export default CardText;
