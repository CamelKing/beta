import { toArray } from './toArray';
import { typeOf } from './typeOf';


// tslint:disable-next-line:cyclomatic-complexity
export function isEqual(inputA: any, inputB: any): boolean {

  // short circuit for equal primitives and references (array, functions, etc.)
  if (inputA === inputB) return true;

  // check if same type tag
  const typeA: string = typeOf(inputA);
  const typeB: string = typeOf(inputB);
  if (typeA !== typeB) return false;

  switch (typeA) {
    // the list of types no comparison can be done, false by default
    case 'undefined':
    case 'null':
    case 'function':
    case 'promise':
    case 'asyncfunction':
    case 'generatorfunction':
    case 'domexception':
    case 'proxy':
    case 'dataview':
    case 'regexp':
      return false;

    // NaN !== NaN, return true here
    case 'nan':
      return true;
  }

  // special case for comparing sets
  if (typeA === 'set') {

    if (inputA.size !== inputB.size) return false;

    const setA: any[] = toArray(inputA.values());
    const setB: any[] = toArray(inputB.values());
    let posA: number = setA.length;

    while ((--posA) >= 0) {

      const lenB: number = setB.length;
      let posB: number = lenB;
      let match: boolean = false;

      while (--posB >= 0 && !match) {
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

  if (['string', 'number', 'boolean', 'symbol', 'date'].includes(typeOf(inputA))
    && valA !== valB) return false;

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
    // TODO add in checking for cyclic references
    if (!isEqual(inputA[key], inputB[key])) return false;
  }

  // if above all pass, then it is equal
  return true;

  // 78840800 registration unit gst dept
  // 78844845

}
