/**
 * Creates a slice of array with n elements dropped from the end.
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