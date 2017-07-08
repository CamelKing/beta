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

import { toInteger } from './toInteger';
import { type } from './type';
import { clamp } from './clamp';
import { MAX_ARRAY_LENGTH } from './constant';

export function toLength(input: any): number {

    const int: number = toInteger(input);
    return type.isNaN(int) ? NaN : clamp(int, 0, MAX_ARRAY_LENGTH);

}
