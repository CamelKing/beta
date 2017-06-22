/**
 * Creates a slice of array with n elements dropped from the beginning.
 *
 * @export
 * @template T
 * @param {T[]} input
 * @param {number} [toDrop=1]
 * @returns {T[]}
 */
export function drop<T>(input: T[], toDrop: number = 1): T[] {

  if (input == null || input.length <= 0) return [];
  return input.slice(toDrop);

  // const start: number = toDrop > 0 ? toDrop : 0;
  // const end: number = input.length + (toDrop < 0 ? toDrop : 0);
  // return input.slice(start, end);

}
