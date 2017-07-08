/**
 * Checks if value is array-like.
 *
 * A value is considered array-like if
 * it's not a function
 * and has a value.length that's an integer greater than or equal to 0
 * and less than or equal to Number.MAX_SAFE_INTEGER.
 *
 * null and undefined will result in false
 *
 * take note that this check for 'array like',
 * as such a null or undefined array variable will result in false.
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

import { isLength } from './isLength';
import { type } from './type';

export function isArrayLike(input: any): boolean {

  return input != null && isLength(input.length) && !type.isFunction(input);

}
