/**
 * This file contains all the constants used by unicode related functions.
 *
 * Note: this function mostly ported from lodash function with same name.
 *
 * @category Language
 *
 * First version: July 01, 2017
 * Last updated : July 01, 2017
 *
 * @export
 * @param {string} input
 * @returns {boolean}
 */


/** Used to compose unicode character classes. */
export const rsAstralRange: string = '\\ud800-\\udfff';
export const rsComboMarksRange: string = '\\u0300-\\u036f';
export const reComboHalfMarksRange: string = '\\ufe20-\\ufe2f';
export const rsComboSymbolsRange: string = '\\u20d0-\\u20ff';
export const rsComboRange: string = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
export const rsVarRange: string = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
export const rsZWJ: string = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
export const reHasUnicode: RegExp = RegExp(`[${rsZWJ + rsAstralRange + rsComboRange + rsVarRange}]`);
