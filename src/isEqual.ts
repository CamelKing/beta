/**
 * Performs a deep comparison between two values to determine
 * if they are equivalent.
 *
 * Note: This method supports comparing arrays, array buffers,
 * booleans, date objects, error objects, maps, numbers,
 * Object objects, regexes, sets, strings, symbols, and typed arrays.
 *
 * Object objects are compared by their own, not inherited,
 * enumerable properties.
 *
 * Functions and DOM nodes are compared by strict equality, i.e. ===.
 *
 * TODO: add in checking for cyclic references
 *
 *
 * @category Language
 *
 * First version: July 09, 2017
 * Last updated : July 09, 2017
 *
 * @export
 * @param {*} inputA
 * @param {*} inputB
 * @returns {boolean}
 */

import { toArray } from './toArray';
import { type } from './type';

// tslint:disable-next-line:cyclomatic-complexity
export function isEqual(inputA: any, inputB: any): boolean {

  // short circuit for equal primitives and references (array, functions, etc.)
  if (inputA === inputB) return true;

  // check if same type tag
  const typeA: string = type.of(inputA);
  const typeB: string = type.of(inputB);
  if (typeA !== typeB) return false;

  switch (typeA) {
    // the list of types no comparison can be done, false by default
    case 'Undefined':
    case 'Null':
    case 'Function':
    case 'Promise':
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'DomException':
    case 'Proxy':
    case 'DataView':
    case 'RegExp':
      return false;

    // NaN !== NaN, return true here
    case 'NaN':
      return true;
  }

  // special case for comparing sets
  if (typeA === 'Set') {

    if (inputA.size !== inputB.size) return false;

    const setA: any[] = toArray(inputA.values());
    const setB: any[] = toArray(inputB.values());
    let posA: number = setA.length;

    while ((--posA) >= 0) {

      const lenB: number = setB.length;
      let posB: number = lenB;
      let match: boolean = false;

      while (--posB >= 0 && !match) {
        // NOTE: recursive call, subject to stack overflow
        if (isEqual(setB[posB], setA[posA])) {
          // swap and pop = delete by mutation
          [setB[posB], setB[lenB - 1]] = [setB[lenB - 1], setB[posB]];
          setB.pop();
          match = true;
        }
      }
      if (!match) return false;
    }

    return true;
  }

  // safeguard line, as most non object type should have been filtered above
  if (typeof inputA !== 'object' || typeof inputB !== 'object') return false;

  // in case some primitives are created with Object() method
  // check if .valueOf() method exist, user defined objects may not have this
  const valA: any = inputA.valueOf ? inputA.valueOf() : undefined;
  const valB: any = inputB.valueOf ? inputB.valueOf() : undefined;

  if (typeA.search(/String|Number|Boolean|Symbol|Date/) > -1
    && valA !== valB)
    return false;

  // the remaining possibilities are all objects, which can be
  // compared with key:value pairs

  // this won't retrieve inherited keys
  const keyA: PropertyKey[] = Reflect.ownKeys(inputA);
  const keyB: PropertyKey[] = Reflect.ownKeys(inputB);

  const lenKeyA: number = keyA.length;
  if (lenKeyA !== keyB.length) return false;

  for (let i: number = 0; i < lenKeyA; i++) {
    const key: PropertyKey = keyA[i];
    if (keyB.indexOf(key) < 0) return false;
    // NOTE: recursive call, subject to stack overflow
    if (!isEqual(inputA[key], inputB[key])) return false;
  }

  // if above all pass, then it is equal
  return true;

}
