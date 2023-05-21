import { usePrefix } from './prefix';
import { getBootstrapClassNames } from './convert';

export function getDisplayClassNames(prefix = 'd', displays = null) {
  if (typeof displays === 'string') {
    return usePrefix(prefix, displays);
  }

  if (typeof displays === 'object') {
    return getBootstrapClassNames(prefix, displays);
  }

  return null;
}
