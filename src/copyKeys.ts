/**
 * Copy properties/keys of object from source to target.
 * Options to copy own and inherited, string and symbol, enum or not.
 *
 * copyKeys.own - copy own enum string keys only
 * copyKeys.all - copy own and inherited enum string keys only
 * copyKeys.every - copy own and inherited enum string/symbols keys
 * copyKeys.select - allow user to pass in options
 *                   for enum, goDeep and SymbolKeys
 *
 * @category Object
 *
 * First version: Jul1 11, 2017
 * Last updated : July 13, 2017
 *
 * @export
 * @param {ObjectOptions} { source, keys, target, goDeep }
 * @returns {object}
 */

import { keysIn } from './keysIn';
import { ObjectOptions } from './constant';
import { isEmpty } from './isEmpty';

function _copyKeys({ source, keys, target, goDeep, enumOnly, symbolKeys }: ObjectOptions): object {

  // initialise parameters

  const output: object = isEmpty(target)
    ? {}
    : _copyKeys({ source: target, enumOnly, symbolKeys, goDeep });

  if (isEmpty(source)) return output;

  // goDeep, enumOnly default to true
  goDeep = goDeep == null || goDeep;
  enumOnly = enumOnly == null || enumOnly;

  // symbolKeys default to false
  symbolKeys = symbolKeys || false;

  // construct keys to copy array

  let keysToCopy: PropertyKey[] = [];

  if (keys != null) {

    if (keys.length === 0) return output;
    else if (typeof keys === 'string') keysToCopy = keys.split(',');
    else if (Array.isArray(keys)) keysToCopy = [...keys];

  }

  if (keys == null || keysToCopy.find((key: string) => key.search(/\*/) >= 0)) {
    keysToCopy = keysIn({ source, goDeep, enumOnly, symbolKeys });
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

  });

  return output;

}

// tslint:disable-next-line:no-namespace
export namespace copyKeys {

  export const select: ({ source, target, keys, goDeep, enumOnly, symbolKeys }: ObjectOptions) => object
    = ({ source, target, keys, goDeep, enumOnly, symbolKeys }: ObjectOptions) =>
      _copyKeys({
        source,
        keys,
        target,
        goDeep,
        enumOnly,
        symbolKeys
      });

  export const own: ({ source, target, keys }: ObjectOptions) => object
    = ({ source, target, keys }: ObjectOptions) =>
      _copyKeys({
        source,
        keys,
        target,
        goDeep: false,
        enumOnly: true,
        symbolKeys: false
      });

  export const all: ({ source, target, keys }: ObjectOptions) => object
    = ({ source, target, keys }: ObjectOptions) =>
      _copyKeys({
        source,
        keys,
        target,
        goDeep: true,
        enumOnly: true,
        symbolKeys: false
      });

  export const every: ({ source, target, keys }: ObjectOptions) => object
    = ({ source, target, keys }: ObjectOptions) =>
      _copyKeys({
        source,
        keys,
        target,
        goDeep: true,
        enumOnly: false,
        symbolKeys: true
      });

}

