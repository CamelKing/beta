/**
 * Checks if value is classified as an Array object.
 *
 * @category Language
 *
 * First version: June 23, 2017
 * Last updated : June 23, 2017
 *
 * @export
 * @param {*} input
 * @returns {boolean}
 */

import { FnPredicate } from './constant';
import { theTypeOf } from './theTypeOf';

export const isArray: FnPredicate
  = (input: any) => (theTypeOf(input) === 'array');
