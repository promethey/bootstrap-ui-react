import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ListGroupItem from './ListGroupItem';
import { usePrefix } from '../../helpers/prefix';

function ListGroup(props) {
  const {
    style,
    children,
    className,
    isFlush,
    isNumbered,
    isHorizontal,
    ...rest
  } = props;

  const BASE_CLASS_NAME = 'list-group';

  /** https://getbootstrap.com/docs/5.1/components/list-group/#numbered */
  const Component = isNumbered ? 'ol' : 'ul';

  const classes = classNames(
    BASE_CLASS_NAME,
    {
      [usePrefix(BASE_CLASS_NAME, 'flush')]: isFlush,
      [usePrefix(BASE_CLASS_NAME, 'numbered')]: isNumbered,
      [usePrefix(BASE_CLASS_NAME, 'horizontal')]: typeof isHorizontal === 'boolean' && isHorizontal,
      [usePrefix(BASE_CLASS_NAME, 'horizontal', isHorizontal)]: typeof isHorizontal === 'string',
    },
    className,
  );

  return (
    <Component className={classes} style={style} {...rest}>
      {children}
    </Component>
  );
}

ListGroup.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add list group items */
  children: PropTypes.node.isRequired,

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /** Activate flush design */
  isFlush: PropTypes.bool,

  /** Activate numbered list */
  isNumbered: PropTypes.bool,

  /** Activate horizontal list */
  isHorizontal: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl']),
  ]),
};

ListGroup.defaultProps = {
  style: null,
  className: null,
  isFlush: false,
  isNumbered: false,
  isHorizontal: false,
};

ListGroup.Item = ListGroupItem;

export default ListGroup;
