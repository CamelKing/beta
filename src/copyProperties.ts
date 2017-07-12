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
 * @param {ObjectOptions} { source, keys, target, goDeep }
 * @returns {object}
 */

import { keysIn } from './keysIn';
import { ObjectOptions } from './constant';
import { isEmpty } from './isEmpty';

export function copyProperties({ source, keys, target, goDeep }: ObjectOptions): object {

  // initialise parameters

  const output: object = isEmpty(target)
    ? {}
    : copyProperties({ source: target });

  if (isEmpty(source)) return output;

  if (goDeep == null) goDeep = true;


  // construct keys to copy array

  let keysToCopy: PropertyKey[] = [];

  if (keys != null) {

    if (keys.length === 0) return output;
    else if (typeof keys === 'string') keysToCopy = keys.split(',');
    else if (Array.isArray(keys)) keysToCopy = [...keys];

  }

  if (keys == null || keysToCopy.find((key: string) => key.search(/\*/) >= 0)) {
    keysToCopy = keysIn({ source, goDeep });
  }

  // actual copying process

  keysToCopy.forEach((key: PropertyKey) => {

    // use if...in to check prototype chains as well
    if (key in (source as object)) {

      // only proceed if (1) own keys, or (2) proto keys + goDeep=true
      if ((source as object).hasOwnProperty(key) || goDeep) {
        // dont copy if existing property on output, 
        // and source is null/undefined
        if (!((source as object)[key] == null && Reflect.has(output, key))) {
          output[key] = (source as object)[key];
        }
      }

    }


    // // check if key exist in target
    // if (output[key]) {
    //   // only overwrite target exisitng key if the new value is not undefined
    //   if ((source as object)[key]) output[key] = (source as object)[key];
    // } else {
    //   // if new key, only copy if it exists in source
    //   if (key in (source as object)) {
    //     // if property in prototype chain, only copy if goDeep
    //     // while ketsIn(goDeep) would have filter deep property,
    //     // this will stop any user passed in deep property
    //     if ((source as object).hasOwnProperty(key) || goDeep) {
    //       output[key] = (source as object)[key];
    //     }
    //   }
    // }

  });

  return output;

}
