/**
 * Creates an array of elements split into groups the length of size.
 * If array can't be split evenly, the final chunk will be the
 * remaining elements.
 *
 * @category Array
 *
 * First version: June 21, 2017
 * Last updated : June 21, 2017
 *
 * @export
 * @template T
 * @param {T[]} input
 * @param {number} [chunkSize=1]
 * @returns {T[][]}
 */

// TODO: add in third parameter so this function can be called with an iteratee such as in the case of array.map()

export function chunk<T>(input: T[], chunkSize: number = 1): T[][] {

  const chunkCount: number = (input == null || chunkSize < 0) ? 0 : Math.ceil(input.length / chunkSize);

  const output: T[][] = Array(chunkCount);

  for (let i: number = 0; i < chunkCount; i++) {
    const start: number = i * chunkSize;
    output[i] = input.slice(start, start + chunkSize);
  }

  return output;
}
