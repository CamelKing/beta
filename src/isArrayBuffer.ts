/**
 * Checks if value is classified as an ArrayBuffer object.
 *
 * @category Language
 *
 * First version: June 23, 2017
 * Last updated : June 24, 2017
 *
 * @export
 * @param {*} input
 * @returns {boolean}
 */

import { FnPredicate } from './constant';
import { theTypeOf } from './theTypeOf';

export const isArrayBuffer: FnPredicate = (input: any) => theTypeOf(input, 'arraybuffer');
