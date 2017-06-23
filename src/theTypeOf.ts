/**
 * Return the type of the parameter passed in, in a lowercase string.
 *
 * @category Language
 *
 * First version: June 23, 2017
 * Last updated : June 23, 2017
 *
 * @export
 * @param {*} input
 * @returns {string}
 */

export function theTypeOf(input: any): string {
    // if (Number.isNaN(input)) return 'nan';
    // return ({}).toString.call(input).match(/\s([a-zA-Z]+)/)[1].toLowerCase();

    const type: string = ({}).toString.call(input).match(/\s([a-zA-Z0-9]+)/)[1].toLowerCase();

    return input !== input ? 'nan'
        : Buffer.isBuffer(input) ? 'buffer' : type;
}
