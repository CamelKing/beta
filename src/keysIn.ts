import { ObjectOptions } from './constant';

/**
 * Extract all enumerable keys in the object, own and inheritted.
 *
 * @category Object
 *
 * First version: Jul1 11, 2017
 * Last updated : July 11, 2017
 *
 * @export
 * @param {ObjectOptions} { source, noLength, goDeep }
 * @returns {string[]}
 */

export function keysIn({ source, noLength, goDeep }: ObjectOptions): string[] {

  if (source == null) source = {};
  if (noLength == null) noLength = true;
  if (goDeep == null) goDeep = true;

  // retrieve own keys, including 'length' for array
  const output: string[] = Object.getOwnPropertyNames(source);

  if (goDeep) {
    // retrieve keys up in the prototype chain
    for (const key in source) {
      if (!output.includes(key)) output.push(key);
    }
  }

  return (noLength && Array.isArray(source))
    ? output.filter((key: string) => key !== 'length')
    : output;

}
