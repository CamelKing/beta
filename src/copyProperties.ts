/**
 * Copy enumerable properties of object from source to target,
 * both own and inherited.
 *
 * Options to specify which properties to copy across.
 * Default is all.
 *
 * @category Object
 *
 * First version: Jul1 11, 2017
 * Last updated : July 11, 2017
 *
 * @export
 * @param {ObjectOptions} { source, keys, target }
 * @returns {object}
 */

import { keysIn } from './keysIn';
import { ObjectOptions } from './constant';

export function copyProperties({ source, keys, target }: ObjectOptions): object {

  const output: object = target ? copyProperties({ source: target }) : {};

  let keysToCopy: string[] = [];

  // construct keys to copy array

  if (keys != null) {

    if (keys.length === 0) return output;
    else if (typeof keys === 'string') keysToCopy = keys.split(',');
    else if (Array.isArray(keys)) keysToCopy = [...keys];

  }

  if (keys == null || keysToCopy.find((key: string) => key.search(/\*/) >= 0)) {
    keysToCopy = keysIn(source);
  }

  // actual copying process

  keysToCopy.forEach((key: string) => {

    key = key.trim();

    // check if key exist in target
    if (output[key]) {
      // only overwrite target exisitng key if the new value is not undefined
      if (source[key]) output[key] = source[key];
    } else {
      // if new key, only copy if it exists in source
      if (key in source) output[key] = source[key];
    }

  });

  return output;

}
