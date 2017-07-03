/**
 * Checks if value is a safe integer.
 *
 * An integer is safe if it's an IEEE-754 double precision number
 * which isn't the result of a rounded unsafe integer.
 *
 * Safe integer runs from
 * Number.MIN_SAFE_INTEGER (-(2^53)-1)
 * to Number.MAX_SAFE_INTEGER ((2^53)-1)
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

import { isInteger } from './isInteger';

export function isSafeInteger(input: any): boolean {
  return isInteger(input)
    && input >= Number.MIN_SAFE_INTEGER
    && input <= Number.MAX_SAFE_INTEGER;
}
