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

export function toSafeInteger(input: string | number): number {
  return clamp(toInteger(input), Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}
