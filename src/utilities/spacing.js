import { usePrefix } from 'helpers/prefix';
import { convertObjToArray } from './convert';

export function getSpacingClassNames(
  prefix,
  spaces,
  axisX,
  axisY,
  top,
  end,
  bottom,
  start,
) {
  const result = {
    [usePrefix(`${prefix}x`, axisX)]: axisX !== null,
    [usePrefix(`${prefix}y`, axisY)]: axisY !== null,
    [usePrefix(`${prefix}t`, top)]: top !== null,
    [usePrefix(`${prefix}e`, end)]: end !== null,
    [usePrefix(`${prefix}b`, bottom)]: bottom !== null,
    [usePrefix(`${prefix}s`, start)]: start !== null,
  };

  if (typeof spaces === 'string' || typeof spaces === 'number') {
    return {
      ...result,
      [usePrefix(prefix, spaces)]: spaces !== null,
    };
  }

  if (typeof spaces === 'object') {
    return {
      ...result,
      [convertObjToArray(prefix, spaces)]: spaces !== null,
    };
  }
}
