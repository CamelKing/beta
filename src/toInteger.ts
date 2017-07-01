/**
 * Returns value in the format of an integer.
 *
 * Non numerical value will result in 0.
 *
 * @category Language
 *
 * First version: June 23, 2017
 * Last updated : June 23, 2017
 *
 * @export
 * @param {*} input
 * @returns {number}
 */

import { toFinite } from './toFinite';

export function toInteger(input: any): number {
  return Math.floor(toFinite(input));
}
