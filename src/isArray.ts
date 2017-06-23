import { theTypeOf } from './theTypeOf';

export function isArray(input: any): boolean {

  return theTypeOf(input) === 'array';

}
