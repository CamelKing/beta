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

import { toInteger } from '../src/toInteger';
import { clamp } from '../src/clamp';
import { MAX_ARRAY_LENGTH } from './constant';

export function toLength(input: string | number): number {
  return clamp(toInteger(input), 0, MAX_ARRAY_LENGTH);
}
