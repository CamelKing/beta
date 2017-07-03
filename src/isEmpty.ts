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
 * @category Language
 *
 * First version: July 03, 2017
 * Last updated : July 03, 2017
 *
 * @export
 * @param {*} input
 * @returns {boolean}
 */

import { isArrayLike } from './isArrayLike';
import { typeOf } from './typeOf';

export function isEmpty(input: any): boolean {

  if (input == null) return true;

  const type: string = typeOf(input);

  if (isArrayLike(input)
    && (type.search(/(float(32|64)|(int|uint)(8|16|32)|uint8clamped|string|array|buffer|arguments)/) !== -1)) {
    // for array like data, check if the length is zero
    return !input.length;
  }

  if (type.search(/(map|set)/) !== -1) {
    // for map and set, check if size is zero
    return !input.size;
  }

  // for everything else, check the property chain (constructor does not count)

  const keys: string[]
    = Object.keys(input).filter((key: string) => key !== 'constructor');

  return !keys.length;

}
