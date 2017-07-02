/**
 * Convert an iterator object to an array
 *
 * @category Language
 *
 * First version: July 02, 2017
 * Last updated : July 02, 2017
 *
 * @export
 * @template T
 * @param {IterableIterator<T>} input
 * @returns {T[]}
 */

export function iteratorToArray<T>(input: IterableIterator<T>): T[] {

  let data: IteratorResult<T>;
  const output: T[] = [];

  while (!(data = input.next()).done) {
    output.push(data.value);
  }

  return output;

}
