/**
 * Checks if value is classified as a Boolean object.
 *
 * @category Language
 *
 * First version: June 24, 2017
 * Last updated : June 24, 2017
 *
 * @export
 * @param {*} input
 * @returns {boolean}
 */

import { FnPredicate } from './constant';
import { theTypeOf } from './theTypeOf';

export const isBoolean: FnPredicate = (input: any) => theTypeOf(input, 'boolean');
