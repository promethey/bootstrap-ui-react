import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from 'components/Box';
import CardGroup from './CardGroup';
import CardHeader from './CardHeader';
import CardImage from './CardImage';
import CardBody from './CardBody';
import CardTitle from './CardTitle';
import CardSubtitle from './CardSubtitle';
import CardText from './CardText';
import CardLink from './CardLink';
import CardFooter from './CardFooter';

function Card({
  style,
  children,
  className,
  ...rest
}) {
  const BASE_CLASS_NAME = 'card';

  const classes = classNames(
    BASE_CLASS_NAME,
    className,
  );

  return (
    <Box className={classes} style={style} {...rest}>
      {children}
    </Box>
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
};

Card.defaultProps = {
  style: null,
  className: null,
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
