/**
 * Checks if value is a valid array- like length.
 *
 * Valid length value is 0 - Number.MAX_SAFE_INTEGER
 *
 * @export
 * @param {*} input
 * @returns {boolean}
 */

import { typeOf } from '../src/typeOf';

export function isLength(input: any): boolean {

  return typeOf.isNumber(input)
    && input >= 0
    && input % 1 === 0
    && input <= Number.MAX_SAFE_INTEGER;

}
