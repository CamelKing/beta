/**
 * Converts value to an integer suitable
 * for use as the length of an array-like object.
 *
 * @category Language
 *
 * First version: June 23, 2017
 * Last updated : June 23, 2017
 *
 * @export
 * @param {(string | number)} input
 * @returns {number}
 */

import { toInteger } from './toInteger';
import { typeOf } from './typeOf';
import { clamp } from './clamp';
import { MAX_ARRAY_LENGTH } from './constant';

export function toLength(input: any): number {

  const int: number = toInteger(input);
  return typeOf.isNaN(int)
    ? NaN
    : clamp(toInteger(input), 0, MAX_ARRAY_LENGTH);
}
