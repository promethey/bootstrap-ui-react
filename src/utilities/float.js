import { usePrefix } from 'helpers/prefix';
import { convertObjToArray } from './convert';

export function getFloatClassNames(floats) {
  const PREFIX = 'float';

  if (typeof floats === 'string') {
    return usePrefix(PREFIX, floats);
  }

  if (typeof floats === 'object') {
    return convertObjToArray(PREFIX, floats);
  }

  return null;
}
