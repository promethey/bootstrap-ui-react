import { usePrefix } from 'helpers/prefix';

// ('d', { xs: 'inline-flex', sm: 'block', md: 'flex' }) -> 'd-inline-flex d-sm-block d-md-flex'

export function convertObjToArray(prefix, classNames) {
  if (prefix === null || classNames === null) {
    return null;
  }

  if (typeof prefix !== 'string' || typeof classNames !== 'object') {
    return null;
  }

  const BREAKPOINTS = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
  const result = [];

  for (const [key, value] of Object.entries(classNames)) {
    if (BREAKPOINTS.includes(key)) {
      result.push(usePrefix(prefix, key === 'xs' ? null : key, value));
    }
  }

  return result;
}
