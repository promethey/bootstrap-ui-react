import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from 'helpers/prefix';
import Box from 'components/Box';

function Button(props) {
  const {
    as: Component,
    style,
    children,
    className,
    to,
    type,
    theme,
    isOutline,
    size,
    isDisabled,
    isPressed,
    isStretchedLink,
    bsToggle,
    bsTarget,
    onClick,
    ...rest
  } = props;

  const BASE_CLASSNAME = 'btn';

  const classes = classNames(
    BASE_CLASSNAME,
    `${BASE_CLASSNAME}${isOutline ? '-outline' : ''}-${theme}`,
    {
      disabled: isDisabled && Component !== 'button',
      [usePrefix(BASE_CLASSNAME, size)]: size,
      active: isPressed,
      [usePrefix('stretched', 'link')]: isStretchedLink && Component === 'a',
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

  /** <button /> props */
  const buttonProperties = {
    ...baseProperties,
    type,
    disabled: isDisabled,
  };

  /** <a /> props */
  const linkProperties = {
    ...baseProperties,
    href: to || '#',
    role: 'button',
  };

  /** <input /> props */
  const inputProps = {
    ...baseProperties,
    type,
    value: children,
  };

  if (isPressed) {
    buttonProperties['aria-pressed'] = true;
    linkProperties['aria-pressed'] = true;
  }

  if (isDisabled) {
    linkProperties['aria-disabled'] = true;
  }

  /** Render <a /> */
  if (Component === 'a' || to !== null) {
    return (
      <Box as="a" {...linkProperties}>
        {children}
      </Box>
    );
  }

  /** Render <button /> */
  if (Component === 'button') {
    return (
      <Box as="button" {...buttonProperties} data-bs-target={bsTarget}>
        {children}
      </Box>
    );
  }

  /** Render <input /> */
  if (Component === 'input') {
    return (
      <Box as="input" {...inputProps} />
    );
  }
}

Button.propTypes = {
  /** Component JSX type */
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
  isOutline: PropTypes.bool,

  /** Change button size */
  size: PropTypes.oneOf([
    'sm',
    'lg',
  ]),

  /** Activate disabled state */
  isDisabled: PropTypes.bool,

  /** Add toggle state */
  isToggle: PropTypes.bool,

  /** Add active style */
  isPressed: PropTypes.bool,

  /** Make clickable by *stretching* a nested link */
  isStretchedLink: PropTypes.bool,

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
  isOutline: false,
  size: null,
  isDisabled: false,
  isToggle: false,
  isPressed: false,
  isStretchedLink: false,
  onClick: null,
  bsToggle: null,
  bsTarget: null,
};

export default Button;
