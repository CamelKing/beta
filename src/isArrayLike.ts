import { isLength } from './isLength';
import { typeOf } from './typeOf';

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
 * @export
 * @param {*} input
 * @returns {boolean}
 */

export function isArrayLike(input: any): boolean {

  return input != null && isLength(input.length) && !typeOf(input, 'function');

}
