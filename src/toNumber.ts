
/**
 *
 * Converts value to a number.
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

import { theTypeOf } from './theTypeOf';

export function toNumber(input: any): number {

  const type: string = theTypeOf(input);

  if (type === 'symbol') return NaN;

  // if (type === 'object') {
  //   const valueOf: any = theTypeOf(input.valueof) === 'function' ? input.valueOf() : input;
  //   const
  // }

  // if (typeof input === 'number') {
  //     return input;
  // }
  return +input;
}
