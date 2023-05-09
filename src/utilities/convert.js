import { usePrefix } from 'helpers/prefix';

/**
 * Function for convert object or string to
 * responsive classes
 *
 * Example:
 * ('d', { xs: 'inline-flex', sm: 'block', md: 'flex' }) ->
 * 'd-inline-flex d-sm-block d-md-flex'
 *
 * @param {string} prefix Bootstrap prefix (for example: 'btn')
 * @param {object} classNames Other classnames
 * @param {object} options Add classNames param in prefix
 * @returns {array||string} Result classnames
 */
export function getBootstrapClassNames(
  prefix,
  classNames,
  options = { prefixInsertBetween: false },
) {
  if (!prefix || !classNames) {
    return null;
  }

  if (
    typeof prefix !== 'string'
    || (typeof classNames !== 'object' && typeof classNames !== 'string'
    && typeof classNames !== 'boolean' && typeof classNames !== 'number')
  ) {
    return null;
  }

  if (typeof classNames === 'boolean') {
    if (classNames) {
      return prefix;
    }
    return null;
  }

  /**
   * Convert prefix to array.
   * Example: 'flex-wrap-revese' => ['flex', 'wrap', 'reverse']
   */
  const prefixInArray = prefix.split('-');

  /**
   * Copy prefix array and drop first elem in prefix array.
   * Example: ['flex', 'wrap', 'reverse'] => ['wrap', 'reverse']
   */
  const copyPrefixInArray = [...prefixInArray];
  copyPrefixInArray.shift();

  if (typeof classNames === 'string' || typeof classNames === 'number') {
    // For example: ('flex-fill','sm') => 'flex-sm-fill'
    if (options.prefixInsertBetween) {
      // ('flex-wrap-reverse', 'sm') => 'flex-sm-wrap-reverse'
      return usePrefix(prefixInArray[0], classNames, copyPrefixInArray);
    }
    return usePrefix(prefix, classNames);
  }

  if (typeof classNames === 'object') {
    const BREAKPOINTS = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
    const classNamesArray = [];

    for (const [key, value] of Object.entries(classNames)) {
      if (BREAKPOINTS.includes(key)) {
        if (options.prefixInsertBetween) {
          classNamesArray.push(
            usePrefix(copyPrefixInArray, key === 'xs' ? null : key, value, prefix.split('-')[prefix.length - 1]),
          );
        }
        classNamesArray.push(
          usePrefix(prefix, key === 'xs' ? null : key, value),
        );
      }
    }

    return classNamesArray;
  }

  return null;
}
