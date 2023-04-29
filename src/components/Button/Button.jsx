import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from 'helpers/prefix';
import Box from 'components/Box';

function Button(props) {
  const {
    as: ComponentType,
    style,
    children,
    className,
    to,
    type,
    theme,
    outline,
    size,
    disabled,
    pressed,
    stretchedLink,
    bsToggle,
    bsTarget,
    onClick,
    ...rest
  } = props;

  const BASE_CLASSNAME = 'btn';

  const classes = classNames(
    BASE_CLASSNAME,
    usePrefix(BASE_CLASSNAME, outline ? 'outline' : null, theme),
    {
      disabled: disabled && ComponentType !== 'button',
      [usePrefix(BASE_CLASSNAME, size)]: size,
      active: pressed,
      [usePrefix('stretched', 'link')]: stretchedLink && ComponentType === 'a',
    },
    className,
  );

  const baseProperties = {
    style,
    className: classes,
    onClick,
    'data-bs-toggle': bsToggle,
    ...rest,
  };

  /** button properties */
  const buttonProperties = {
    ...baseProperties,
    type,
    disabled,
  };

  /** link properties */
  const linkProperties = {
    ...baseProperties,
    href: to || '#',
    role: 'button',
  };

  /** input properties */
  const inputProps = {
    ...baseProperties,
    type,
    value: children,
  };

  if (pressed) {
    buttonProperties['aria-pressed'] = true;
    linkProperties['aria-pressed'] = true;
  }

  if (disabled) {
    linkProperties['aria-disabled'] = true;
  }

  /** Render as link */
  if (ComponentType === 'a' || to !== null) {
    return (
      <Box as="a" {...linkProperties}>
        {children}
      </Box>
    );
  }

  /** Render as button */
  if (ComponentType === 'button') {
    return (
      <Box as="button" {...buttonProperties} data-bs-target={bsTarget}>
        {children}
      </Box>
    );
  }

  /** Render as input */
  if (ComponentType === 'input') {
    return (
      <Box as="input" {...inputProps} />
    );
  }
}

Button.propTypes = {
  /** Change JSX type */
  as: PropTypes.oneOf([
    'button',
    'a',
    'input',
  ]),

  /** Add other styles */
  style: PropTypes.shape({}),

  /** Add label for button */
  children: PropTypes.node.isRequired,

  /** Add other classes */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  /** Alias for attribute *href* */
  to: PropTypes.string,

  /** Alias for attribute *type* */
  type: PropTypes.string,

  /** Choose main theme */
  theme: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
    'link',
  ]),

  /** Activate outline style */
  outline: PropTypes.bool,

  /** Change button size */
  size: PropTypes.oneOf([
    'sm',
    'lg',
  ]),

  /** Activate disabled state */
  disabled: PropTypes.bool,

  /** Add toggle state */
  isToggle: PropTypes.bool,

  /** Add active style */
  pressed: PropTypes.bool,

  /** Make clickable by *stretching* a nested link */
  stretchedLink: PropTypes.bool,

  /** Click event handler */
  onClick: PropTypes.func,

  /** Alias for *data-bs-toggle* */
  bsToggle: PropTypes.string,

  /** Alias for *data-bs-target* */
  bsTarget: PropTypes.string,
};

Button.defaultProps = {
  as: 'button',
  style: null,
  className: null,
  to: null,
  type: 'button',
  theme: 'primary',
  outline: false,
  size: null,
  disabled: false,
  isToggle: false,
  pressed: false,
  stretchedLink: false,
  onClick: null,
  bsToggle: null,
  bsTarget: null,
};

export default Button;
