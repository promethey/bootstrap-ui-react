export function usePrefix(baseClassName, ...classNames) {
  const classes = [];
  const SEPARATOR = '-';

  classes.push(baseClassName);

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
