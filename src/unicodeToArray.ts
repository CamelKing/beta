/**
 * Convert a unicode string to array correctly.
 *
 * Note: the javascript function string.split('') won't work
 *       as unicode characters made up of more than one byte
 *       per character.
 *
 *       While this can be used to convert normal non unicode
 *       string, it is not high performance. Best to test and
 *       use string.split() for ASCII string.
 *
 * @export
 * @param {string} input
 * @returns {string[]}
 */

import { reUnicode } from '../src/unicdoe';

export function unicodeToArray(input: string): string[] {

  return input ? input.match(reUnicode) || [] : [];

}
