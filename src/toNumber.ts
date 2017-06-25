/**
 * Return the value as a number.
 *
 * Non Numeric value will result in NaN.
 *
 * @category Language
 *
 * First version: June 23, 2017
 * Last updated : June 23, 2017
 *
 * @export
 * @param {*} input
 * @returns {number}
 */

import { typeOf } from './typeOf';

export function toNumber(input: any): number {

  return (typeOf.isSymbol(input)) ? NaN : +input;

}
