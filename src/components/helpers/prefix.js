export function usePrefix(prefix, className) {
  return className ? `${prefix}-${className}` : prefix;
}
