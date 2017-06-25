/**
 * Creates a new slice of array with n elements dropped from the end.
 *
 * @category Array
 *
 * First version: June 22, 2017
 * Last updated : June 22, 2017
 *
 * @export
 * @template T
 * @param {T[]} input
 * @param {number} [toDrop=1]
 * @returns {T[]}
 */

import { drop } from './drop';

export function dropRight<T>(input: T[], toDrop: number = 1): T[] {

  if (input == null || input.length - toDrop <= 0) return [];
  return input.slice(0, input.length - toDrop);

}
