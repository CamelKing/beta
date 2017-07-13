/**
 * Performs a partial deep comparison between object and source to
 * determine if object contains equivalent property values.
 *
 * Partial comparisons will match empty array and empty object
 * source values against any array or object value, respectively.
 *
 * @category Language
 *
 * First version: July 14, 2017
 * Last updated : July 14, 2017
 *
 * @export
 * @param {object} input
 * @param {object} source
 * @returns {boolean}
 */

import { isEqual } from './isEqual';
import { keysIn } from './keysIn';

export function isMatch(input: object, source: object): boolean {

  const sourceKey: PropertyKey[]
    = keysIn({ source, goDeep: true, enumOnly: true });

  if (sourceKey.length === 0) return true;

  const inputKey: PropertyKey[]
    = keysIn({ source: input, goDeep: true, enumOnly: true });

  if (sourceKey.length > inputKey.length) return false;

  let key: PropertyKey;
  for (key of sourceKey) {
    if (!inputKey.includes(key) || !isEqual(input[key], source[key]))
      return false;
  }

  return true;

}
