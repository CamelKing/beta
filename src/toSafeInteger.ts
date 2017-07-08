/**
 * Converts value to a safe integer.
 * A safe integer can be compared and represented correctly.
 *
 * @category Language
 *
 * First version: July 03, 2017
 * Last updated : July 03, 2017
 *
 * @export
 * @param {(string | number)} input
 * @returns {number}
 */

import { toInteger } from './toInteger';
import { clamp } from './clamp';
import { typeOf } from './typeOf';

export function toSafeInteger(input: any): number {
  const int: number = toInteger(input);
  return typeOf.isNaN(int)
    ? NaN
    : clamp(int, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}
