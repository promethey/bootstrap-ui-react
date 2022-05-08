import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function TextBox(props) {
  const {
    as: Component,
    style,
    children,
    className,
    fs,
    fw,
    fst,
    lh,
    margin,
    marginSm,
    marginMd,
    marginLg,
    marginXl,
    marginXxl,
    marginX,
    marginY,
    textColor,
    bgColor,
    isBorder,
    alignment,
    alignmentSm,
    alignmentMd,
    alignmentLg,
    alignmentXl,
    transform,
    decoration,
    isLead,
    isWrap,
    isNoWrap,
    isBreak,
    isMonospace,
    ...rest
  } = props;

  const BASE_CLASS_NAME = 'text';

  const getMarginClassNames = (sizes, breakpoint = false) => {
    if (sizes) {
      if (Array.isArray(sizes)) {
        /**
         * Sides table:
         * t - index === 0 (top)
         * s - index === 1 (start)
         * b - index === 2 (bottom)
         * e - index === 3 (end)
         */
        if (sizes.length === 4 || sizes.length === 2) {
          return sizes.map((m, index) => {
            let sides = '';

            if ([0, 1, 2, 3, 4, 5, 'auto'].includes(m)) {
              switch (index) {
                case 0:
                  sides = 't';
                  break;
                case 1:
                  sides = 's';
                  break;
                case 2:
                  sides = 'b';
                  break;
                case 3:
                  sides = 'e';
                  break;
                default:
                  break;
              }

              if (breakpoint) {
                return `m${sides}-${breakpoint}-${m}`;
              }

              return `m${sides}-${m}`;
            }

            return null;
          }).join(' ');
        }
      }

      if (typeof sizes === 'number') {
        return `m-${sizes}`;
      }

      if (typeof sizes === 'string') {
        return `m-${sizes}`;
      }
    }

    return null;
  };

  const classes = classNames(
    {
      [`bg-${bgColor}`]: bgColor,
      border: isBorder,
      [`border-${isBorder}`]: typeof isBorder === 'string',
      [`${BASE_CLASS_NAME}-${textColor}`]: textColor,
      [getMarginClassNames(margin)]: margin,
      [getMarginClassNames(margin, 'sm')]: marginSm,
      [getMarginClassNames(margin, 'md')]: marginMd,
      [getMarginClassNames(margin, 'lg')]: marginLg,
      [getMarginClassNames(margin, 'xl')]: marginXl,
      [getMarginClassNames(margin, 'xxl')]: marginXxl,
      [`mx-${marginX}`]: marginX,
      [`my-${marginY}`]: marginY,
      [`${BASE_CLASS_NAME}-${alignment}`]: alignment,
      [`${BASE_CLASS_NAME}-sm-${alignmentSm}`]: alignmentSm,
      [`${BASE_CLASS_NAME}-md-${alignmentMd}`]: alignmentMd,
      [`${BASE_CLASS_NAME}-lg-${alignmentLg}`]: alignmentLg,
      [`${BASE_CLASS_NAME}-xl-${alignmentXl}`]: alignmentXl,
      [`fs-${fs}`]: fs,
      [`fw-${fw}`]: fw,
      [`fst-${fst}`]: fst,
      [`lh-${lh}`]: lh,
      [`${BASE_CLASS_NAME}-${transform}`]: transform,
      [`${BASE_CLASS_NAME}-decoration-${decoration}`]: decoration,
      lead: isLead,
      [`${BASE_CLASS_NAME}-wrap`]: isWrap && !isNoWrap,
      [`${BASE_CLASS_NAME}-nowrap`]: isNoWrap && !isWrap,
      [`${BASE_CLASS_NAME}-break`]: isBreak,
      'font-monospace': isMonospace,
    },
    className,
  );

  return (
    <Component style={style} className={classes} {...rest}>
      {children}
    </Component>
  );
}

TextBox.propTypes = {
  as: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'small',
    'span',
    'p',
    'div',
  ]),
  style: PropTypes.shape({}),
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  fs: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  fw: PropTypes.oneOf([
    'bold',
    'bolder',
    'normal',
    'light',
    'lighter',
  ]),
  fst: PropTypes.oneOf([
    'italic',
    'normal',
  ]),
  lh: PropTypes.oneOf([
    1,
    '1',
    'sm',
    'base',
    'lg',
  ]),
  margin: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.number,
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),
  marginSm: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.number,
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),
  marginMd: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.number,
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),
  marginLg: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.number,
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),
  marginXl: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.number,
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),
  marginXxl: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
    ),
    PropTypes.number,
    PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  ]),
  marginX: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
  marginY: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 'auto']),
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
  alignment: PropTypes.oneOf([
    'start',
    'center',
    'end',
  ]),
  alignmentSm: PropTypes.oneOf([
    'start',
    'center',
    'end',
  ]),
  alignmentMd: PropTypes.oneOf([
    'start',
    'center',
    'end',
  ]),
  alignmentLg: PropTypes.oneOf([
    'start',
    'center',
    'end',
  ]),
  alignmentXl: PropTypes.oneOf([
    'start',
    'center',
    'end',
  ]),
  transform: PropTypes.oneOf([
    'lowercase',
    'uppercase',
    'capitalize',
  ]),
  decoration: PropTypes.oneOf([
    'underline',
    'line-through',
    'none',
  ]),
  isLead: PropTypes.bool,
  isWrap: PropTypes.bool,
  isNoWrap: PropTypes.bool,
  isBreak: PropTypes.bool,
  isMonospace: PropTypes.bool,
};

TextBox.defaultProps = {
  as: 'p',
  style: null,
  className: null,
  fs: null,
  fw: null,
  fst: null,
  lh: null,
  margin: null,
  marginSm: null,
  marginMd: null,
  marginLg: null,
  marginXl: null,
  marginXxl: null,
  marginX: null,
  marginY: null,
  textColor: null,
  bgColor: null,
  isBorder: false,
  alignment: null,
  alignmentSm: null,
  alignmentMd: null,
  alignmentLg: null,
  alignmentXl: null,
  transform: null,
  decoration: null,
  isLead: false,
  isWrap: false,
  isNoWrap: false,
  isBreak: false,
  isMonospace: false,
};

export default TextBox;
