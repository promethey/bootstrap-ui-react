import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { usePrefix } from '../utilities/prefix';
import { getSpacingClassNames } from '../utilities/spacing';

function FlexBox(props) {
  const {
    as: Component,
    style,
    children,
    className,
    display,
    displaySm,
    displayMd,
    displayLg,
    displayXl,
    displayXxl,
    direction,
    directionSm,
    directionMd,
    directionLg,
    directionXl,
    directionXxl,
    justifyContent,
    justifyContentSm,
    justifyContentMd,
    justifyContentLg,
    justifyContentXl,
    justifyContentXxl,
    margin,
    marginSm,
    marginMd,
    marginLg,
    marginXl,
    marginXxl,
    padding,
    paddingSm,
    paddingMd,
    paddingLg,
    paddingXl,
    paddingXxl,
    bgColor,
    textColor,
    isBorder,
  } = props;

  const BASE_CLASS_NAME = usePrefix('d', display);

  const classes = classNames(
    BASE_CLASS_NAME,
    {
      [usePrefix('d-sm', displaySm)]: displaySm !== null,
      [usePrefix('d-md', displayMd)]: displayMd !== null,
      [usePrefix('d-lg', displayLg)]: displayLg !== null,
      [usePrefix('d-xl', displayXl)]: displayXl !== null,
      [usePrefix('d-xxl', displayXxl)]: displayXxl !== null,
      [usePrefix('flex', direction)]: direction,
      [usePrefix('flex-sm', directionSm)]: directionSm,
      [usePrefix('flex-md', directionMd)]: directionMd,
      [usePrefix('flex-lg', directionLg)]: directionLg,
      [usePrefix('flex-xl', directionXl)]: directionXl,
      [usePrefix('flex-xxl', directionXxl)]: directionXxl,
      [usePrefix('justify-content', justifyContent)]: justifyContent,
      [usePrefix('justify-content-sm', justifyContentSm)]: justifyContentSm,
      [usePrefix('justify-content-md', justifyContentMd)]: justifyContentMd,
      [usePrefix('justify-content-lg', justifyContentLg)]: justifyContentLg,
      [usePrefix('justify-content-xl', justifyContentXl)]: justifyContentXl,
      [usePrefix('justify-content-xxl', justifyContentXxl)]: justifyContentXxl,
      [getSpacingClassNames('m', margin)]: margin !== null,
      [getSpacingClassNames('m', marginSm, 'sm')]: marginSm !== null,
      [getSpacingClassNames('m', marginMd, 'md')]: marginMd !== null,
      [getSpacingClassNames('m', marginLg, 'lg')]: marginLg !== null,
      [getSpacingClassNames('m', marginXl, 'xl')]: marginXl !== null,
      [getSpacingClassNames('m', marginXxl, 'xxl')]: marginXxl !== null,
      [getSpacingClassNames('p', padding)]: padding !== null,
      [getSpacingClassNames('p', paddingSm, 'sm')]: paddingSm !== null,
      [getSpacingClassNames('p', paddingMd, 'Md')]: paddingMd !== null,
      [getSpacingClassNames('p', paddingLg, 'lg')]: paddingLg !== null,
      [getSpacingClassNames('p', paddingXl, 'xl')]: paddingXl !== null,
      [getSpacingClassNames('p', paddingXxl, 'xxl')]: paddingXxl !== null,
      [usePrefix('bg', bgColor)]: bgColor,
      [usePrefix('text', textColor)]: textColor,
      border: isBorder,
      [usePrefix('border', isBorder)]: typeof isBorder === 'string',
    },
    className,
  );

  return (
    <Component style={style} className={classes}>
      {children}
    </Component>
  );
}

FlexBox.propTypes = {
  as: PropTypes.oneOf([
    'div',
    'span',
  ]),
  style: PropTypes.shape({}),
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  display: PropTypes.oneOf([
    'flex',
    'inline-flex',
  ]),
  displaySm: PropTypes.oneOf([
    'flex',
    'inline-flex',
  ]),
  displayMd: PropTypes.oneOf([
    'flex',
    'inline-flex',
  ]),
  displayLg: PropTypes.oneOf([
    'flex',
    'inline-flex',
  ]),
  displayXl: PropTypes.oneOf([
    'flex',
    'inline-flex',
  ]),
  displayXxl: PropTypes.oneOf([
    'flex',
    'inline-flex',
  ]),
  direction: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),
  directionSm: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),
  directionMd: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),
  directionLg: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),
  directionXl: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),
  directionXxl: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),
  justifyContent: PropTypes.oneOf([
    'start',
    'end',
    'between',
    'around',
    'evenly',
  ]),
  justifyContentSm: PropTypes.oneOf([
    'start',
    'end',
    'between',
    'around',
    'evenly',
  ]),
  justifyContentMd: PropTypes.oneOf([
    'start',
    'end',
    'between',
    'around',
    'evenly',
  ]),
  justifyContentLg: PropTypes.oneOf([
    'start',
    'end',
    'between',
    'around',
    'evenly',
  ]),
  justifyContentXl: PropTypes.oneOf([
    'start',
    'end',
    'between',
    'around',
    'evenly',
  ]),
  justifyContentXxl: PropTypes.oneOf([
    'start',
    'end',
    'between',
    'around',
    'evenly',
  ]),
  margin: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),
  marginSm: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),
  marginMd: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),
  marginLg: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),
  marginXl: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),
  marginXxl: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),
  padding: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),
  paddingSm: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),
  paddingMd: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),
  paddingLg: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),
  paddingXl: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),
  paddingXxl: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),
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
    'reset',
  ]),
  isBorder: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf([
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
  ]),
};

FlexBox.defaultProps = {
  as: 'div',
  style: null,
  className: null,
  display: 'flex',
  displaySm: null,
  displayMd: null,
  displayLg: null,
  displayXl: null,
  displayXxl: null,
  direction: null,
  directionSm: null,
  directionMd: null,
  directionLg: null,
  directionXl: null,
  directionXxl: null,
  justifyContent: null,
  justifyContentSm: null,
  justifyContentMd: null,
  justifyContentLg: null,
  justifyContentXl: null,
  justifyContentXxl: null,
  margin: null,
  marginSm: null,
  marginMd: null,
  marginLg: null,
  marginXl: null,
  marginXxl: null,
  padding: null,
  paddingSm: null,
  paddingMd: null,
  paddingLg: null,
  paddingXl: null,
  paddingXxl: null,
  bgColor: null,
  textColor: null,
  isBorder: false,
};

export default FlexBox;
