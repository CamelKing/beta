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
export const rsAstral: string = `[${rsAstralRange}]`;
export const rsCombo: string = `[${rsComboRange}]`;
export const rsFitz: string = '\\ud83c[\\udffb-\\udfff]';
export const rsModifier: string = `(?:${rsCombo}|${rsFitz})`;
export const rsNonAstral: string = `[^${rsAstralRange}]`;
export const rsRegional: string = '(?:\\ud83c[\\udde6-\\uddff]){2}';
export const rsSurrPair: string = '[\\ud800-\\udbff][\\udc00-\\udfff]';
export const rsZWJ: string = '\\u200d';

/** Used to compose unicode regexes. */
export const reOptMod: string = `${rsModifier}?`;
export const rsOptVar: string = `[${rsVarRange}]?`;
export const rsOptJoin: string = `(?:${rsZWJ}(?:${[rsNonAstral, rsRegional, rsSurrPair].join('|')})${rsOptVar + reOptMod})*`;
export const rsSeq: string = rsOptVar + reOptMod + rsOptJoin;
export const rsNonAstralCombo: string = `${rsNonAstral}${rsCombo}?`;
export const rsSymbol: string = `(?:${[rsNonAstralCombo, rsCombo, rsRegional, rsSurrPair, rsAstral].join('|')})`;

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
export const reHasUnicode: RegExp = RegExp(`[${rsZWJ + rsAstralRange + rsComboRange + rsVarRange}]`);

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
export const reUnicode: RegExp = RegExp(`${rsFitz}(?=${rsFitz})|${rsSymbol + rsSeq}`, 'g');
