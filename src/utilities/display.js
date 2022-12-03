import { usePrefix } from 'helpers/prefix';
import { convertObjToArray } from './convert';

export function getDisplayClassNames(prefix = 'd', displays = null) {
  if (typeof displays === 'string') {
    return usePrefix(prefix, displays);
  }

  if (typeof displays === 'object') {
    return convertObjToArray(prefix, displays);
  }

  return null;
}
