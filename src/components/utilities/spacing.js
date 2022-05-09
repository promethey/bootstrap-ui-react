export function getSpacingClassNames(property = '', sizes = 0, breakpoint = false) {
  if (sizes !== null) {
    if (Array.isArray(sizes)) {
      /**
       * Indexes on block element:
       *
       *        0
       *   -----------
       * 3 -         - 1
       *   -----------
       *        2
       *
       * Sides table:
       * t - index === 0 (top)
       * e - index === 1 (end)
       * b - index === 2 (bottom)
       * s - index === 3 (start)
       *
       * Examples (property='m'):
       * sizes = [2, 1, 1, 2] => 'mt-2 me-1 mb-1 ms-2'
       * sizes = [2, null, 1, null] => 'mt-2 mb-1'
       * sizes = [2, null, null, null] => 'mt-2'
       * sizes = [2, 2, 2] => 'mt-2 me-2 mb-2'
       * sizes = [2] => 'mt-2'
       * sizes = 2 => 'm-2'
       * sizes = 0 => 'm-0'
       */
      if (sizes.length >= 1 && sizes.length <= 4) {
        // [3, 2] => [3, 2, 3, 2]
        const modifiedSizes = sizes.length === 2 ? [...sizes, ...sizes] : sizes;

        return modifiedSizes.map((size, index) => {
          let sides = '';
          const defaultSizes = [0, 1, 2, 3, 4, 5, 'auto'];

          if (defaultSizes.includes(size)) {
            switch (index) {
              case 0:
                sides = 't';
                break;
              case 1:
                sides = 'e';
                break;
              case 2:
                sides = 'b';
                break;
              case 3:
                sides = 's';
                break;
              default:
                break;
            }

            if (breakpoint) {
              return `${property}${sides}-${breakpoint}-${size}`;
            }

            return `${property}${sides}-${size}`;
          }

          return null;
        }).filter((spacingClassName) => spacingClassName !== null).join(' ');
      }
    }

    if (typeof sizes === 'number' || typeof sizes === 'string') {
      return `${property}-${sizes}`;
    }
  }

  return null;
}
