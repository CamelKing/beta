/**
 * Checks if value is a valid array- like length.
 *
 * Valid length value is 0 - Number.MAX_SAFE_INTEGER
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

import { type } from './type';

export function isLength(input: any): boolean {

    return type.isNumber(input)
        && input >= 0
        && input % 1 === 0
        && input <= Number.MAX_SAFE_INTEGER;

}
