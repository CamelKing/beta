/**
 * Checks if value is less than or equal other.
 *
 * Note: this behaves differently from lodash version,
 *       no numerical strings pairs will be compared on
 *       alphabetical order, rather than converted to 0.
 *
 * @category Language
 *
 * First version: July 03, 2017
 * Last updated : July 03, 2017
 *
 * @export
 * @param {(number | string)} input1
 * @param {(number | string)} input2
 * @returns {boolean}
 */

export function lte(input1: number | string, input2: number | string): boolean {
  return input1 <= input2;
}
