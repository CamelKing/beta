/**
 * Checks if object conforms to predicate source by invoking
 * the predicate properties of source with the corresponding
 * property values of object.
 *
 * Note: if Predicate source does not cover all properties in
 * input, it will be a partial comformance.
 *
 * @category Language
 *
 * First version: July 15, 2017
 * Last updated : July 15, 2017
 *
 * @export
 * @param {object} input
 * @param {object} predicate
 * @returns {boolean}
 */

import { type } from './type';
import { isEqual } from './isEqual';

export function conformsTo(input: object, predicate: object): boolean {

  const keys: string[] = Object.keys(predicate);
  let { length } = keys;
  let result: boolean = true;

  while (result && (--length) >= 0) {

    const key: string = keys[length];

    if (result = (input[key] != null)) {

      if (type.isFunction(predicate[key])) {
        result = predicate[key].call(input, input[key]);
      } else {
        result = isEqual(predicate[key], input[key]);
      }

    }

  }

  return result;
}
