/**
 * Produces a random number between the inclusive lower and upper bounds.
 * If only one argument is provided a number between 0 and the given
 * number is returned. If floating is true, or either lower or upper are
 * floats, a floating-point number is returned instead of an integer.
 *
 * Note: JavaScript follows the IEEE-754 standard for resolving
 *       floating-point values which can produce unexpected results.
 *
 * @category Language
 *
 * First version: July 15, 2017
 * Last updated : July 15, 2017
 *
 * @export
 * @param {number} [start]
 * @param {number} [end]
 * @param {boolean} [float]
 * @returns {number}
 */

import { isInteger } from './isInteger';
import { toInteger } from './toInteger';

export function random(start?: number,
  end?: number,
  float?: boolean): number {

  if (arguments.length === 0) float = true;
  // if (start == null && end == null && float == null) float = true;
  if (start == null || start !== start) start = 0;
  if (end == null || end !== end) end = 1;
  if (start > end)[start, end] = [end, start];

  const rnum: number = Math.random() * (end - start) + start;

  return ((float === false)
    || (isInteger(start) && isInteger(end) && float == null))
    ? toInteger(rnum < Math.ceil(start) ? Math.ceil(start) : rnum)
    : rnum;

}
