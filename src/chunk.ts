/**
 * Creates a new array of elements split into groups the length of size.
 * If array can't be split evenly, the final chunk will be the
 * remaining elements.
 *
 * @category Array
 *
 * First version: June 21, 2017
 * Last updated : July 07, 2017
 *
 * @export
 * @template T
 * @param {T[]} input
 * @param {number} [chunkSize=1]
 * @returns {T[][]}
 */

// TODO: add in third parameter so this function can be called with an iteratee such as in the case of array.map()

export function chunk<T>(input: T[], chunkSize: number = 1, whole: boolean = false): T[][] {

  const chunkCount: number = (input == null || chunkSize < 0) ? 0 : Math.ceil(input.length / chunkSize);

  const output: T[][] = Array(chunkCount);

  let pos: number = 0;

  for (let i: number = 0; i < chunkCount; i++) {
    output[i] = input.slice(pos, pos += chunkSize);
  }

  if (whole) output[chunkCount - 1].length = chunkSize;

  return output;

}
