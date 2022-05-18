import { usePrefix } from 'helpers/prefix';

export function getDisplayClassName(value, breakpoint) {
  const BASE_CLASS_NAME = 'd';

  return usePrefix(BASE_CLASS_NAME, breakpoint, value);
}

export function getDisplayClassNames(xs, sm, md, lg, xl, xxl) {
  return {
    [getDisplayClassName(xs)]: xs,
    [getDisplayClassName(sm, 'sm')]: sm,
    [getDisplayClassName(md, 'md')]: md,
    [getDisplayClassName(lg, 'lg')]: lg,
    [getDisplayClassName(xl, 'xl')]: xl,
    [getDisplayClassName(xxl, 'sm')]: xxl,
  };
}

export function getPrintClassName(value, breakpoint) {
  const BASE_CLASS_NAME = 'd-print';

  return usePrefix(BASE_CLASS_NAME, breakpoint, value);
}

export function getPrintClassNames(xs, sm, md, lg, xl, xxl) {
  return {
    [getPrintClassName(xs)]: xs,
    [getPrintClassName(sm, 'sm')]: sm,
    [getPrintClassName(md, 'md')]: md,
    [getPrintClassName(lg, 'lg')]: lg,
    [getPrintClassName(xl, 'xl')]: xl,
    [getPrintClassName(xxl, 'xxl')]: xxl,
  };
}
