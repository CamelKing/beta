/**
 * Clamps number within the inclusive lower and upper bounds.
 *
 * Note: shorthand .low() allow clamping lower bound, and
 *       .high() allows clamping upper bound.
 *
 * @category Number
 *
 * First version: July 03, 2017
 * Last updated : July 03, 2017
 *
 * @export
 * @param {number} input
 * @param {number} [low]
 * @param {number} [high]
 * @returns {number}
 */

export function clamp(input: number, low?: number, high?: number): number {

  let floor: number = low == null ? -Infinity : low;
  let ceil: number = high == null ? +Infinity : high;

  if (floor > ceil) { [floor, ceil] = [ceil, floor]; }

  return input !== input
    ? NaN
    : input < floor
      ? floor
      : input > ceil
        ? ceil
        : input;

}

// tslint:disable-next-line:no-namespace
export namespace clamp {

  export function low(input: number, floor?: number): number {
    return clamp(input, floor, +Infinity);
  }

  export function high(input: number, ceil?: number): number {
    return clamp(input, -Infinity, ceil);
  }

}
