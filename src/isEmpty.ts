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
import { type } from './type';

export function isEmpty(input: any): boolean {

  if (input == null) return true;

  const inputType: string = type.of(input);

  if (isArrayLike(input)
    && (inputType.search(/(Float(32|64)|(Int|Uint)(8|16|32)|Uint8Clamped|String|Array|Buffer|Arguments)/) !== -1)) {
    // for array like data, check if the length is zero
    return !input.length;
  }

  if (inputType.search(/(Map|Set)/) !== -1) {
    // for map and set, check if size is zero
    return !input.size;
  }

  // for everything else, check the property chain (constructor does not count)

  const keys: string[]
    = Object.keys(input).filter((key: string) => key !== 'constructor');

  return !keys.length;

}
