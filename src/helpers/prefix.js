/**
 * Function for creating classnames like Bootstrap
 * @param {stirng} prefix
 * @param  {array} classNames
 * @returns {string} classnames
 */
export function usePrefix(prefix, ...classNames) {
  const classes = [];
  const SEPARATOR = '-';

  classes.push(prefix);

  if (classNames.length > 0) {
    for (let i = 0; i < classNames.length; i += 1) {
      const className = classNames[i];
      if (typeof className === 'string' || typeof className === 'number') {
        classes.push(SEPARATOR + className);
      }
    }
  }

  return classes.join('');
}
