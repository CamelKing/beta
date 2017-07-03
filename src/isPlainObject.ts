/**
 * Checks if value is a plain object, that is,
 * an object created by the Object constructor
 * or one with a [[Prototype]] of null.
 *
 * @category Language
 *
 * First version: July 03, 2017
 * Last updated : July 03, 2017
 *
 * * @export
 * @param {*} input
 * @returns {boolean}
 */

import { funcToString } from './constant';
import { isObjectLike } from './isObjectLike';
import { typeOf } from './typeOf';

export function isPlainObject(input: any): boolean {

  // if not even an object
  if (!(isObjectLike(input) && typeOf.isObject(input))) return false;

  const proto: any = Object.getPrototypeOf(input);

  // null from Object.create(null) => plain object
  if (proto === null) return true;

  const Ctor: any
    = proto.hasOwnProperty('constructor') && proto.constructor;

  // if constructor is a function, is an instance of itself, and
  // has the same toString Tag as a normal Object => Plain Object
  return typeof Ctor === 'function'
    && Ctor instanceof Ctor
    && (funcToString.call(Ctor) === funcToString.call(Object));

}
