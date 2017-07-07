/**
 * Checks if value is a finite primitive number.
 *
 * @category Language
 *
 * First version: June 25, 2017
 * Last updated : July 05, 2017
 *
 * @export
 * @param {*} input
 * @returns {boolean}
 */

import { typeOf } from './typeOf';

export function isFinite(input: number): boolean {

  return Number.isFinite(input);

}
