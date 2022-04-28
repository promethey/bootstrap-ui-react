export function getPrefix(prefix, className) {
  return className ? `${prefix}-${className}` : null;
}
