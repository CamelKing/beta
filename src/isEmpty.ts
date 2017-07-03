import { isArrayLike } from './isArrayLike';
import { typeOf } from './typeOf';

/**
 * Checks if value is an empty object, collection, map, or set.
 *
 * Objects are considered empty if
 * they have no own enumerable string keyed properties.
 *
 * Array-like values such as arguments objects, arrays,
 * buffers, strings, or jQuery-like collections are
 * considered empty if they have a length of 0.
 *
 * Similarly, maps and sets are considered empty
 * if they have a size of 0.
 *
 * Any other type of value will always result in true (empty)
 *
 * @export
 * @param {*} input
 * @returns {boolean}
 */

export function isEmpty(input: any): boolean {

  // null and undefined => true
  if (input == null) return true;

  const type: string = typeOf(input);

  if (isArrayLike(input)
    && (type.search(/(float(32|64)|(int|uint)(8|16|32)|uint8clamped|string|array|buffer|arguments)/) !== -1
      || typeOf(input.slice) === 'function')) {

    // for array like data, check if the length is zero
    return !input.length;

  } else if (type.search(/(map|set)/) !== -1) {

    // for map and set, check if size is zero
    return !input.size;

  } else {
    for (const key in input) {
      if (input.hasOwnProperty(key) && key !== 'constructor') {
        // for object, check the property chain (constructor does not count)
        return false;
      }
    }

  }

  // anything else will result in true (empty)
  return true;

}
