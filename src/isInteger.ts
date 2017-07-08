/**
 * Checks if value is an integer.
 *
 * @category Language
 *
 * First version: June 25, 2017
 * Last updated : July 01, 2017
 *
 * @export
 * @param {*} input
 * @returns {boolean}
 */

import { toInteger } from './toInteger';

export function isInteger(input: number): boolean {
  return input === toInteger(input);
}
