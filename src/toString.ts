/**
 * Returns value as a (new) string.
 * An empty string is returned for null and undefined values.
 * The sign of -0 is preserved.
 *
 * @category Language
 *
 * First version: June 25, 2017
 * Last updated : June 25, 2017
 *
 * @export
 * @param {*} input
 * @returns {string}
 */

import { typeOf } from './typeOf';

export function toString(input: any): string {

  switch (typeOf(input)) {

    case 'string':
      return input.slice(0);

    case 'symbol':
      return input.toString();

    case 'promise':
      return 'Promise()';

    case 'error':
      return 'Error()';

    case 'array':
      return input.map((v: any) => toString(v)).join(',');

    case 'object':
      return JSON.stringify(input);

    case 'function':
      return toString(input());

    case 'null':
    case 'undefined':
      return '';

    default:
      const output: string = input + '';
      return (output === '0' && (1 / input) === -Infinity) ? '-0' : output;
  }

}
