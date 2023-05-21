import { usePrefix } from './prefix';
import { getBootstrapClassNames } from './convert';

export function getFloatClassNames(floats) {
  const PREFIX = 'float';

  if (typeof floats === 'string') {
    return usePrefix(PREFIX, floats);
  }

  if (typeof floats === 'object') {
    return getBootstrapClassNames(PREFIX, floats);
  }

  return null;
}
