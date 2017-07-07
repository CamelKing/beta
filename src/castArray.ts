/**
 * Casts value as an (new) array if it's not one.
 *
 * @category Language
 *
 * First version: June 23, 2017
 * Last updated : June 23, 2017
 *
 * @export
 * @template T
 * @param {(T | T[])} [input]
 * @param {...any[]} others
 * @returns {T[]}
 */

export function castArray<T>(input: T | T[], ...others: any[]): T[] {

  return Array.isArray(input) ? [...input, ...others] : [input, ...others];

}
