/**
 * Convert a string to an array
 *
 * Note: this will handle unicode string correctly.
 *
 * @category Language
 *
 * First version: July 02, 2017
 * Last updated : July 02, 2017
 *
 * @export
 * @param {string} input
 * @returns {string[]}
 */

import { hasUnicode } from '../src/hasUnicode';
import { unicodeToArray } from '../src/unicodeToArray';

export function stringToArray(input: string): string[] {

    return !input ? [] :
        hasUnicode(input) ?
            unicodeToArray(input) : input.split('') as string[];

}
