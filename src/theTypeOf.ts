/**
 * Return the type of the variable passed in, in a lowercase string.
 *
 * optional one can pass in a check to see if the variable matches
 * the type, in which case the function will return a boolean instead.
 *
 * Note: in the past, the version of this function without type checking is
 *       named theTypeOf(), it is now changed to this name, is().
 *
 * First version: June 23, 2017
 * Last updated : June 24, 2017
 *
 * @param {*} input
 * @param {string} [check]
 * @returns {(string | boolean)}
 */

export function theTypeOf(input: any): string;
export function theTypeOf(input: any, check: string): boolean;
export function theTypeOf(input: any, check?: string): string | boolean {

  const type: string = input !== input ? 'nan'
    : Buffer.isBuffer(input) ? 'buffer'
      : ({}).toString.call(input).match(/\s([a-zA-Z0-9]+)/)[1].toLowerCase();

  return !check ? type : type === check;

}
