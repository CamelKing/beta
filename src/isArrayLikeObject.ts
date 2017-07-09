/**
 * Checks if value is an object that is array-like.
 *
 * A value is considered array-like object if
 * it's must be an object,
 * and has a value.length that's an integer greater than or equal to 0
 * and less than or equal to Number.MAX_SAFE_INTEGER.
 *
 * null and undefined will result in false
 *
 * take note that string and array will fail this test as 
 * they are not consider object object.
 *
 * @category Language
 *
 * First version: July 09, 2017
 * Last updated : July 09, 2017
 *
 * @export
 * @param {*} input
 * @returns {boolean}
 */

import { isLength } from './isLength';
import { type } from './type';

export function isArrayLikeObject(input: any): boolean {

  return input != null && type.isObject(input) && isLength(input.length);

}
