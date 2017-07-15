/**
 * Checks if n is between start and up to, but not including, end.
 * If end is not specified, it's set to start with start then set to 0.
 * If start is greater than end the params are swapped to support
 * negative ranges.
 *
 * @category Language
 *
 * First version: July 15, 2017
 * Last updated : July 15, 2017
 *
 * @export
 * @param {(number | string)} input
 * @param {(number | string)} start
 * @param {(number | string)} [end=0]
 * @returns {boolean}
 */

import { toNumber } from './toNumber';

export function inRange(input: number | string,
  start: number | string,
  end: number | string = 0): boolean {

  const inputNum: number = toNumber(input);
  let startNum: number = toNumber(start);
  let endNum: number = toNumber(end);

  if (startNum > endNum) { [startNum, endNum] = [endNum, startNum]; }

  return endNum > inputNum && inputNum >= startNum;

}
