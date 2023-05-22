import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Box from '../Box';
import CardGroup from './CardGroup';
import CardHeader from './CardHeader';
import CardImage from './CardImage';
import CardBody from './CardBody';
import CardTitle from './CardTitle';
import CardSubtitle from './CardSubtitle';
import CardText from './CardText';
import CardLink from './CardLink';
import CardFooter from './CardFooter';

/**
 * PropTypes
 */
const propTypes = {
  /**
   * Add other styles
   */
  style: PropTypes.shape({}),

  /**
   * Add other subcomponents
   */
  children: PropTypes.node.isRequired,

  /**
   * Add other classes
   */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
};

/**
 * DefaultProps
 */
const defaultProps = {
  style: null,
  className: null,
};

/**
 * Card component
 * Basis on Box component
 *
 * Childrens:
 * - Header
 * - Image
 * - Body
 * - Title
 * - Subtitle
 * - Text
 * - Link
 * - Footer
 * - Group
 *
 * @author Sedelkov Egor <sedelkovegor@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 * @link https://getbootstrap.com/docs/5.3/components/card
 *
 * Changelog:
 * - Refactoring component [22/05/2023]
 */
export default function Card({
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

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

Card.Group = CardGroup;
Card.Header = CardHeader;
Card.Image = CardImage;
Card.Body = CardBody;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Text = CardText;
Card.Link = CardLink;
Card.Footer = CardFooter;
