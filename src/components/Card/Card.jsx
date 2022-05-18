import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from 'helpers/prefix';
import CardGroup from './CardGroup';
import CardHeader from './CardHeader';
import CardImage from './CardImage';
import CardBody from './CardBody';
import CardTitle from './CardTitle';
import CardSubtitle from './CardSubtitle';
import CardText from './CardText';
import CardLink from './CardLink';
import CardFooter from './CardFooter';

function Card(props) {
  const {
    style,
    children,
    className,
    bgColor,
    textColor,
    borderColor,
    ...rest
  } = props;

  const BASE_CLASS_NAME = 'card';

  const classes = classNames(
    BASE_CLASS_NAME,
    {
      [usePrefix('bg', bgColor)]: bgColor,
      [usePrefix('text', textColor)]: textColor,
      [usePrefix('border', bgColor)]: borderColor,
    },
    className,
  );

  return (
    <div className={classes} style={style} {...rest}>
      {children}
    </div>
  );
}

Card.propTypes = {
  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add other subcomponents */
  children: PropTypes.node.isRequired,

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /** Change text color */
  textColor: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
    'body',
    'muted',
    'white',
    'black-50',
    'white-50',
  ]),

  /** Change background color */
  bgColor: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
    'body',
    'white',
    'transparent',
  ]),

  /** Change border color */
  borderColor: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
    'white',
  ]),
};

Card.defaultProps = {
  style: null,
  className: null,
  textColor: null,
  bgColor: null,
  borderColor: null,
};

Card.Group = CardGroup;
Card.Header = CardHeader;
Card.Image = CardImage;
Card.Body = CardBody;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Text = CardText;
Card.Link = CardLink;
Card.Footer = CardFooter;

export default Card;
