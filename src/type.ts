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
 * Note July 09 2017: This function is now named as checkType() locally, but
 *       exported as type.is<T>(), type.of() and type.check() respectively.
 *
 * @category Language
 *
 * First version: June 23, 2017
 * Last updated : July 09, 2017
 *
 * @param {*} input
 * @param {string} [check]
 * @returns {(string | boolean)}
 */

import { FnPredicate, objToString } from './constant';

function checkType(input: any): string;
function checkType(input: any, check: string): boolean;
function checkType(input: any, check?: string): string | boolean {

  // const type: string = input !== input ? 'nan'
  //   : Buffer.isBuffer(input) ? 'buffer'
  //     : ({}).toString.call(input).match(/\s([a-zA-Z0-9]+)/)[1].toLowerCase();

  const type: string = input !== input ? 'NaN'
    : Buffer.isBuffer(input) ? 'Buffer'
      : objToString.call(input).match(/\s([a-zA-Z0-9]+)/)[1];
  // .toLowerCase();

  return !check ? type : type === check;

}

// tslint:disable-next-line:no-namespace
export namespace type {

  export const check: (i: any, t: string) => boolean
    = (i: any, t: string) => checkType(i, t);

  export const of: (i: any) => string
    = (i: any) => checkType(i);

  export const isFloat64Array: FnPredicate
    = (i: any) => checkType(i, 'Float64Array');

  export const isFloat32Array: FnPredicate
    = (i: any) => checkType(i, 'Float32Array');

  export const isUint32Array: FnPredicate
    = (i: any) => checkType(i, 'Uint32Array');

  export const isInt32Array: FnPredicate
    = (i: any) => checkType(i, 'Int32Array');

  export const isUint16Array: FnPredicate
    = (i: any) => checkType(i, 'Uint16Array');

  export const isInt16Array: FnPredicate
    = (i: any) => checkType(i, 'Int16Array');

  export const isUint8ClampedArray: FnPredicate
    = (i: any) => checkType(i, 'Uint8ClampedArray');

  export const isUint8Array: FnPredicate
    = (i: any) => checkType(i, 'Uint8Array');

  export const isInt8Array: FnPredicate
    = (i: any) => checkType(i, 'Int8Array');

  export const isRegExp: FnPredicate
    = (i: any) => checkType(i, 'RegExp');

  export const isBuffer: FnPredicate
    = (i: any) => checkType(i, 'Buffer');

  export const isArrayBuffer: FnPredicate
    = (i: any) => checkType(i, 'ArrayBuffer');

  export const isMap: FnPredicate
    = (i: any) => checkType(i, 'Map');

  export const isWeakMap: FnPredicate
    = (i: any) => checkType(i, 'WeakMap');

  export const isPromise: FnPredicate
    = (i: any) => checkType(i, 'Promise');

  export const isFunction: FnPredicate
    = (i: any) => checkType(i, 'Function');

  export const isError: FnPredicate
    = (i: any) => checkType(i, 'Error');

  export const isSet: FnPredicate
    = (i: any) => checkType(i, 'Set');

  export const isWeakSet: FnPredicate
    = (i: any) => checkType(i, 'WeakSet');

  export const isDate: FnPredicate
    = (i: any) => checkType(i, 'Date');

  export const isObject: FnPredicate
    = (i: any) => checkType(i, 'Object');

  export const isArray: FnPredicate
    = (i: any) => checkType(i, 'Array');

  export const isBoolean: FnPredicate
    = (i: any) => checkType(i, 'Boolean');

  export const isNumber: FnPredicate
    = (i: any) => checkType(i, 'Number');

  export const isString: FnPredicate
    = (i: any) => checkType(i, 'String');

  export const isSymbol: FnPredicate
    = (i: any) => checkType(i, 'Symbol');

  export const isNaN: FnPredicate
    = (i: any) => checkType(i, 'NaN');

  export const isNull: FnPredicate
    = (i: any) => checkType(i, 'Null');

  export const isUndefined: FnPredicate
    = (i: any) => checkType(i, 'Undefined');

  export const isArguments: FnPredicate
    = (i: any) => checkType(i, 'Arguments');

  export const isAsyncFunction: FnPredicate
    = (i: any) => checkType(i, 'AsyncFunction');

  export const isGenerator: FnPredicate
    = (i: any) => checkType(i, 'Generator');

  export const isDataView: FnPredicate
    = (i: any) => checkType(i, 'DataView');

  /*
     TODO:
     untestable for the moment.
     will add in once a way is found to create and test these.

    export const isDomException: FnPredicate
      = (i: any) => checkType(i, 'DomException');

    export const isProxy: FnPredicate
      = (i: any) => checkType(i, 'Proxy');

  */

}
