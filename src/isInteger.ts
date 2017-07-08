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
import { type } from './type';

export function isInteger(input: any): boolean {
    return type.isNumber(input) && input === toInteger(input);
}
