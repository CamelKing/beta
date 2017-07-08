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

import { type } from './type';

export function toString(input: any): string {

    switch (type.of(input)) {

        case 'String':
            return input.slice(0);

        case 'Symbol':
            return input.toString();

        case 'Promise':
            return 'Promise()';

        case 'Error':
            return `${input.message}\n${input.stack}`;

        case 'Array':
            return input.map((v: any) => toString(v)).join(',');

        case 'Object':
            return JSON.stringify(input);

        case 'Function':
            return input.toString();

        case 'Null':
            return 'null';

        case 'Undefined':
            return 'undefined';

        default:
            const output: string = input + '';
            return (output === '0' && (1 / input) === -Infinity) ? '-0' : output;
    }

}
