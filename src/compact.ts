/**
 * Creates a new array with all falsey values removed.
 * The values false, null, 0, "", undefined, and NaN are falsey.
 *
 * @category Array
 *
 * First version: June 21, 2017
 * Last updated : July 07, 2017
 *
 * @export
 * @template T
 * @param {T[]} input
 * @returns {T[]}
 */

export function compact<T>(input: T[]): T[] {
  // --StrictNullChecks remove null array
  // return input == null ? [] : input.filter((item: any) => item || false);
  return input.filter((item: any) => item || false);
}
