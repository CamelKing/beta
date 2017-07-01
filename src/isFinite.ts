
/**
 * Checks if value is a finite primitive number.
 *
 * @export
 * @param {*} input
 * @returns {boolean}
 */

import { typeOf } from '../src/typeOf';

export function isFinite(input: any): boolean {

  return Number.isFinite(input);

}
