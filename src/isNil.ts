/**
 * Checks if value is null or undefined.
 *
 * @category Language
 *
 * First version: June 25, 2017
 * Last updated : July 01, 2017
 *
 * @export
 * @param {*} input
 * @returns {boolean}
 */

export function isNil(input: any): boolean {
  return input == null;
}
