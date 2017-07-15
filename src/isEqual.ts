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
// export function isEqual(inputA: any, inputB: any): boolean;
export function isEqual(inputA: any, inputB: any,
  memory?: Map<any, any>): boolean {

  // short circuit for equal primitives,
  // references (array, functions, etc.) and null/undefined
  if (inputA === inputB) return true;

  // memory to store/handle cyclical references
  if (memory == null) memory = new Map();
  else {
    // check if these pairs has been previously compared before
    const previousA: any = memory.get(inputA);
    const previousB: any = memory.get(inputB);
    if (previousA && previousB) {

      // if the pairs has been compared before (and unresolved)
      // return true as they are cyclical references
      return (previousA === previousB);
    }
  }


  // check if same type tag
  const typeA: string = type.of(inputA);
  const typeB: string = type.of(inputB);
  if (typeA !== typeB) return false;

  switch (typeA) {
    // the list of types no comparison can be done, false by default
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
  if (typeA === 'Set') return _isEqualSet(inputA, inputB, memory);

  // safeguard line, as most non object type should have been filtered above
  if (typeof inputA !== 'object' || typeof inputB !== 'object') return false;

  const valA: any = inputA.valueOf();
  const valB: any = inputB.valueOf();

  if (typeA.search(/String|Number|Boolean|Symbol|Date/) > -1
    && valA !== valB)
    return false;

  // the remaining possibilities are all objects, which can be
  // compared with key:value pairs

  return _isEqualProperties(inputA, inputB, memory);

}

// internal function to deep compare two objects (with key value pairs)
function _isEqualProperties(inputA: object, inputB: object, memory?: Map<any, any>): boolean {


  // this won't retrieve inherited keys
  const keyA: PropertyKey[] = Reflect.ownKeys(inputA);
  const keyB: PropertyKey[] = Reflect.ownKeys(inputB);

  // memory for circular reference check down the line in recursive call
  if (memory) {
    memory.set(inputA, inputB);
    memory.set(inputB, inputA);
  }

  let posKeyA: number = keyA.length;

  let result: boolean = (posKeyA === keyB.length);

  while (result && (--posKeyA) >= 0) {
    const key: PropertyKey = keyA[posKeyA];
    if (result = keyB.indexOf(key) >= 0) {
      // NOTE: recursive call, subject to stack overflow
      result = isEqual(inputA[key], inputB[key], memory);
    }
  }

  // remove from circular stack
  if (memory) {
    memory.delete(inputA);
    memory.delete(inputB);
  }

  return result;

}

// internal function to deep compare 2 sets
function _isEqualSet(inputA: Set<any>, inputB: Set<any>, memory?: Map<any, any>): boolean {

  if (inputA.size !== inputB.size) return false;

  // memory for circular reference check down the line in recursive call
  if (memory) {
    memory.set(inputA, inputB);
    memory.set(inputB, inputA);
  }

  const setA: any[] = toArray(inputA.values());
  const setB: any[] = toArray(inputB.values());


  let posA: number = setA.length;
  let match: boolean = true;

  // outer loop run thru the whole list, or until no match found
  while ((--posA) >= 0 && match) {

    const lenB: number = setB.length;
    let posB: number = lenB;
    match = false;

    // inner loop run thru the array, until no match found
    while ((--posB) >= 0 && !match) {

      // NOTE: recursive call, subject to stack overflow
      if (isEqual(setB[posB], setA[posA], memory)) {
        // swap and pop = delete by mutation
        [setB[posB], setB[lenB - 1]] = [setB[lenB - 1], setB[posB]];
        setB.pop();
        match = true; // end current match and carry on the outer loop
      }

      // if no match found, match will be false, and will trigger
      // end of both inner and outer loop

    }

  }

  // remove from circular stack
  if (memory) {
    memory.delete(inputA);
    memory.delete(inputB);
  }

  return match;

}
