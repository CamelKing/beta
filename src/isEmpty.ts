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

  // for array like data, check if the length is zero
  if (isArrayLike(input)
    && (type.search(/(float(32|64)|(int|uint)(8|16|32)|uint8clamped|string|array|buffer|arguments)/) !== -1
      || typeOf(input.slice) === 'function')) {

    return !input.length;

  }

  // for map and set, check if size is zero
  if (type.search(/(map|set)/) !== -1) return !input.size;

  // for object, check the property chain containing more than just constructor
  for (const key in input) {
    if (input.hasOwnProperty(key) && key !== 'constructor') {
      return false;
    }
  }

  // anything else will result in true (empty)
  return true;

}
