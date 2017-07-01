/**
 * Checks if value is an integer.
 *
 * @export
 * @param {*} input
 * @returns {boolean}
 */

import { typeOf } from '../src/typeOf';
import { toInteger } from '../src/toInteger';

export function isInteger(input: any): boolean {
  return typeOf(input, 'number') && input === toInteger(input);
}
