/**
 * Extract all enumerable keys in the object, own and inheritted.
 *
 * @category Object
 *
 * First version: Jul1 11, 2017
 * Last updated : July 11, 2017
 *
 * @export
 * @param {object} input
 * @param {boolean} [inclNative=false] - options to include native
 *                                       keys(length, size etc.)
 * @returns {string[]}
 */

export function keysIn(input: object = {}, noLength: boolean = true): string[] {

  // retrieve own keys, including 'length' for array
  const output: string[] = Object.getOwnPropertyNames(input);

  // retrieve keys up in the prototype chain
  for (const key in input) {
    if (!output.includes(key)) output.push(key);
  }

  return (noLength && Array.isArray(input))
    ? output.filter((key: string) => key !== 'length')
    : output;

}
