/**
 * Creates a slice of array with n elements dropped from the beginning.
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
export function drop<T>(input: T[], toDrop: number = 1): T[] {

  return (input == null || input.length <= 0) ? [] : input.slice(toDrop);

}
