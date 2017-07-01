import { typeOf } from '../src/typeOf';

export function isLength(i: any): boolean {

  return typeOf.isNumber(i)
    && i >= 0
    && i % 1 === 0
    && i <= Number.MAX_SAFE_INTEGER;

}
