import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from 'helpers/prefix';
import { getSpacingClassNames } from 'utilities/spacing';

function Button(props) {
  const {
    as: Component,
    style,
    children,
    className,
    to,
    type,
    width,
    maxWidth,
    margin,
    marginSm,
    marginMd,
    marginLg,
    marginXl,
    marginXxl,
    marginX,
    marginY,
    mt,
    me,
    mb,
    ms,
    padding,
    paddingSm,
    paddingMd,
    paddingLg,
    paddingXl,
    paddingXxl,
    paddingX,
    paddingY,
    pt,
    pe,
    pb,
    ps,
    theme,
    isOutline,
    opacity,
    size,
    isDisabled,
    isBlock,
    isToggle,
    isActive,
    isStretchedLink,
    onClick,
    ...rest
  } = props;

  const BASE_CLASS_NAME = 'btn';

  const classes = classNames(
    BASE_CLASS_NAME,
    `${BASE_CLASS_NAME}${isOutline ? '-outline' : ''}-${theme}`,
    {
      [usePrefix('opacity', opacity)]: opacity !== null,
      [usePrefix('w', width)]: width,
      [usePrefix('mw', maxWidth)]: maxWidth,
      disabled: isDisabled && Component !== 'button',
      [usePrefix('w', 100)]: isBlock,
      [usePrefix(BASE_CLASS_NAME, size)]: size,
      active: isActive,
      [usePrefix('stretched', 'link')]: isStretchedLink && Component === 'a',
    },
    getSpacingClassNames(
      'm',
      margin,
      marginSm,
      marginMd,
      marginLg,
      marginXl,
      marginXxl,
      marginX,
      marginY,
      mt,
      me,
      mb,
      ms,
    ),
    getSpacingClassNames(
      'p',
      padding,
      paddingSm,
      paddingMd,
      paddingLg,
      paddingXl,
      paddingXxl,
      paddingX,
      paddingY,
      pt,
      pe,
      pb,
      ps,
    ),
    className,
  );

  const baseProperties = {
    style,
    className: classes,
    onClick,
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
    href: to,
    role: 'button',
  };

  /** <input /> props */
  const inputProps = {
    ...baseProperties,
    type,
    value: children,
  };

  if (isToggle) {
    buttonProperties['data-bs-toggle'] = 'button';
    buttonProperties.autoComplete = 'off';

    linkProperties['data-bs-toggle'] = 'button';
  }

  if (isActive) {
    buttonProperties['aria-pressed'] = true;

    linkProperties['aria-pressed'] = true;
  }

  if (isDisabled) {
    linkProperties['aria-disabled'] = true;
  }

  if (Component === 'button') {
    return (
      <button {...buttonProperties}>
        {children}
      </button>
    );
  }

  if (Component === 'a') {
    return (
      <a {...linkProperties}>
        {children}
      </a>
    );
  }

  if (Component === 'input') {
    return (
      <input {...inputProps} />
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

  /** Change width */
  width: PropTypes.oneOf([
    25,
    50,
    75,
    100,
    'auto',
  ]),

  /** Change max width */
  maxWidth: PropTypes.oneOf([
    25,
    50,
    75,
    100,
    'auto',
  ]),

  /** Set *margin* style */
  margin: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

  /** Set *margin* style for breakpoint sm */
  marginSm: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

  /** Set *margin* style for breakpoint md */
  marginMd: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

  /** Set *margin* style for breakpoint lg */
  marginLg: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

  /** Set *margin* style for breakpoint xl */
  marginXl: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

  /** Set *margin* style for breakpoint xxl */
  marginXxl: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

  /** Set *margin* X-axis style */
  marginX: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),

  /** Set *margin* Y-axis style */
  marginY: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),

  /** Set *margin* top style */
  mt: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Set *margin* end style */
  me: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Set *margin* bottom style */
  mb: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Set *margin* start style */
  ms: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Set *padding* style */
  padding: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

  /** Set *padding* style for breakpoint sm */
  paddingSm: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

  /** Set *padding* style for breakpoint md */
  paddingMd: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

  /** Set *padding* style for breakpoint lg */
  paddingLg: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

  /** Set *padding* style for breakpoint xl */
  paddingXl: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

  /** Set *padding* style for breakpoint xxl */
  paddingXxl: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),

  /** Set *padding* X-axis style */
  paddingX: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),

  /** Set *padding* Y-axis style */
  paddingY: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),

  /** Set *padding* top style */
  pt: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Set *padding* end style */
  pe: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Set *padding* bottom style */
  pb: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

  /** Set *padding* start style */
  ps: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),

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

  /** Change opacity style */
  opacity: PropTypes.oneOf([
    25,
    50,
    75,
    100,
  ]),

  /** Change button size */
  size: PropTypes.oneOf([
    'sm',
    'lg',
  ]),

  /** Activate disabled state */
  isDisabled: PropTypes.bool,

  /** Set width 100% */
  isBlock: PropTypes.bool,

  /** Add toggle state */
  isToggle: PropTypes.bool,

  /** Add active style */
  isActive: PropTypes.bool,

  /** Make clickable by *stretching* a nested link */
  isStretchedLink: PropTypes.bool,

  /** Click event handler */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  as: 'button',
  style: null,
  className: null,
  to: '#',
  type: 'button',
  width: null,
  maxWidth: null,
  margin: null,
  marginSm: null,
  marginMd: null,
  marginLg: null,
  marginXl: null,
  marginXxl: null,
  marginX: null,
  marginY: null,
  mt: null,
  me: null,
  mb: null,
  ms: null,
  padding: null,
  paddingSm: null,
  paddingMd: null,
  paddingLg: null,
  paddingXl: null,
  paddingXxl: null,
  paddingX: null,
  paddingY: null,
  pt: null,
  pe: null,
  pb: null,
  ps: null,
  theme: 'primary',
  isOutline: false,
  opacity: null,
  size: null,
  isDisabled: false,
  isBlock: false,
  isToggle: false,
  isActive: false,
  isStretchedLink: false,
  onClick: null,
};

export default Button;
