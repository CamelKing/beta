/**
 * Checks if value is classified as a typed array.
 *
 * @category Language
 *
 * First version: July 03, 2017
 * Last updated : July 03, 2017
 *
 * @export
 * @param {*} input
 * @returns {boolean}
 */

import { type } from './type';

export function isTypedArray(input: any): boolean {

    /**
     * original regexp from lodash:
     * const reTypedTag: RegExp
     * = /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)\]$/;
     */

    return (type.of(input).search(/(Float(32|64)|(Int|Uint)(8|16|32)|Uint8Clamped)Array/) !== -1);

}
