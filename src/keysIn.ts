/**
 * Extract keys in an object.
 *
 * Options: goDeep - include keys from prototype chain
 *          symbolKeys - include symbol keys
 *          enumonly - only enumerable keys (eg. length on array is not)
 *
 * Default: goDepp, no symbolKeys and enumonly. Same as For...in.
 *
 * @category Object
 *
 * First version: Jul1 11, 2017
 * Last updated : July 13, 2017
 *
 * @export
 * @param {ObjectOptions} { source, goDeep, symbolKeys, enumOnly }
 * @returns {string[]}
 */

import { ObjectOptions } from './constant';

export function keysIn({ source, goDeep, symbolKeys, enumOnly }: ObjectOptions): PropertyKey[] {

  if (source == null) return [];
  if (goDeep == null) goDeep = true;          // def: include prototype
  if (symbolKeys == null) symbolKeys = false; // def: no symbol keys
  if (enumOnly == null) enumOnly = true;      // def: enumerable keys only

  // Object.keys = own properties (enum only) keys
  // Object.getOwnPropertyNames = own properties (enum or not) keys
  // Object.getOwnPropertySymbols = own symbol Properties
  // Reflect.ownKeys = Object.getOwnPropertyNames + Object.getOwnPropertySymbols

  // construct an array of own keys (base on enumonly and symbolKeys option)
  const output: PropertyKey[] = [
    ...(enumOnly
      ? Object.keys(source)
      : Object.getOwnPropertyNames(source)),
    ...(symbolKeys
      ? Object.getOwnPropertySymbols(source)
      : [])
  ];

  // go up the prototype chain if goDeep
  if (goDeep) {

    const isInternal: RegExp = /^__.*__$/;

    let proto: object = Object.getPrototypeOf(source);

    while (proto != null) {

      // extract an array of keys at current prototype level
      const protoKeys: PropertyKey[] = [
        ...(enumOnly
          ? Object.keys(proto)
          : Object.getOwnPropertyNames(proto)),
        ...(symbolKeys
          ? Object.getOwnPropertySymbols(proto)
          : [])
      ];

      protoKeys.forEach((key: PropertyKey) => {

        // only add in keys that is not '__xxx __', not function
        // and not exists in the output array
        if (!output.includes(key)
          && (typeof key === 'string' && !isInternal.test(key))
          && typeof proto[key] !== 'function') {

          output.push(key);

        }

      });

      // continue moving up the prototype chain
      proto = Object.getPrototypeOf(proto);

    }

  }

  return output;

}
