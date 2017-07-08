/**
 * Return the type of the variable passed in, in a lowercase string.
 *
 * optional: one can pass in a check string to see if the variable matches
 * the type, in which case the function will return a boolean instead.
 *
 * alternatively: one can call the .is<Data Type>() method to check if
 * the variable matched the data type to check.
 *
 * Note: in the past, the version of this function without type checking is
 *       named theTypeOf(), it is now changed to this name, typeOf().
 *
 * @category Language
 *
 * First version: June 23, 2017
 * Last updated : June 25, 2017
 *
 * @param {*} input
 * @param {string} [check]
 * @returns {(string | boolean)}
 */

import { FnPredicate, objToString } from './constant';

export function typeOf(input: any | null | undefined): string;
export function typeOf(input: any | null | undefined, check: string): boolean;
export function typeOf(input: any | null | undefined, check?: string): string | boolean {

  // const type: string = input !== input ? 'nan'
  //   : Buffer.isBuffer(input) ? 'buffer'
  //     : ({}).toString.call(input).match(/\s([a-zA-Z0-9]+)/)[1].toLowerCase();

  const type: string = input !== input ? 'nan'
    : Buffer.isBuffer(input) ? 'buffer'
      : objToString.call(input).match(/\s([a-zA-Z0-9]+)/)[1].toLowerCase();

  return !check ? type : type === check;

}

// tslint:disable-next-line:no-namespace
export namespace typeOf {

  export const isFloat64Array: FnPredicate
    = (i: any) => typeOf(i, 'float64array');

  export const isFloat32Array: FnPredicate
    = (i: any) => typeOf(i, 'float32array');

  export const isUint32Array: FnPredicate
    = (i: any) => typeOf(i, 'uint32array');

  export const isInt32Array: FnPredicate
    = (i: any) => typeOf(i, 'int32array');

  export const isUint16Array: FnPredicate
    = (i: any) => typeOf(i, 'uint16array');

  export const isInt16Array: FnPredicate
    = (i: any) => typeOf(i, 'int16array');

  export const isUint8ClampedArray: FnPredicate
    = (i: any) => typeOf(i, 'uint8clampedarray');

  export const isUint8Array: FnPredicate
    = (i: any) => typeOf(i, 'uint8array');

  export const isInt8Array: FnPredicate
    = (i: any) => typeOf(i, 'int8array');

  export const isRegExp: FnPredicate
    = (i: any) => typeOf(i, 'regexp');

  export const isBuffer: FnPredicate
    = (i: any) => typeOf(i, 'buffer');

  export const isArrayBuffer: FnPredicate
    = (i: any) => typeOf(i, 'arraybuffer');

  export const isMap: FnPredicate
    = (i: any) => typeOf(i, 'map');

  export const isWeakMap: FnPredicate
    = (i: any) => typeOf(i, 'weakmap');

  export const isPromise: FnPredicate
    = (i: any) => typeOf(i, 'promise');

  export const isFunction: FnPredicate
    = (i: any) => typeOf(i, 'function');

  export const isError: FnPredicate
    = (i: any) => typeOf(i, 'error');

  export const isSet: FnPredicate
    = (i: any) => typeOf(i, 'set');

  export const isWeakSet: FnPredicate
    = (i: any) => typeOf(i, 'weakset');

  export const isDate: FnPredicate
    = (i: any) => typeOf(i, 'date');

  export const isObject: FnPredicate
    = (i: any) => typeOf(i, 'object');

  export const isArray: FnPredicate
    = (i: any) => typeOf(i, 'array');

  export const isBoolean: FnPredicate
    = (i: any) => typeOf(i, 'boolean');

  export const isNumber: FnPredicate
    = (i: any) => typeOf(i, 'number');

  export const isString: FnPredicate
    = (i: any) => typeOf(i, 'string');

  export const isSymbol: FnPredicate
    = (i: any) => typeOf(i, 'symbol');

  export const isNaN: FnPredicate
    = (i: any) => typeOf(i, 'nan');

  export const isNull: FnPredicate
    = (i: any) => typeOf(i, 'null');

  export const isUndefined: FnPredicate
    = (i: any) => typeOf(i, 'undefined');

  export const isArguments: FnPredicate
    = (i: any) => typeOf(i, 'arguments');

  export const isAsyncFunction: FnPredicate
    = (i: any) => typeOf(i, 'asyncfunction');

  export const isGeneratorFunction: FnPredicate
    = (i: any) => typeOf(i, 'generatorfunction');

  export const isDomException: FnPredicate
    = (i: any) => typeOf(i, 'domexception');

  export const isProxy: FnPredicate
    = (i: any) => typeOf(i, 'proxy');

  export const isDateView: FnPredicate
    = (i: any) => typeOf(i, 'dataview');

}
