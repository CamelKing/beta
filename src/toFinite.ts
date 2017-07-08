/**
 * Return the value passed in as a finite number.
 *
 * Any non numerical input will result in 0.
 *
 * @category Language
 *
 * First version: June 25, 2017
 * Last updated : June 25, 2017
 *
 * @export
 * @param {*} input
 * @returns {number}
 */

import { toNumber } from './toNumber';
import { typeOf } from './typeOf';

export function toFinite(input: any): number {

  if (typeOf(input).search(/(number|string|date)/) === -1) return NaN;
  if (!input) return 0;

  const output: number = toNumber(input);

  return output === Infinity ? Number.MAX_VALUE
    : output === -Infinity ? -Number.MAX_VALUE
      : output !== output ? 0
        : output;

}
