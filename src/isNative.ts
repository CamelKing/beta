/**
 * Checks if value is a pristine native function.
 *
 * Note: this is not 100% fool proof.
 *
 * @category Language
 *
 * First version: July 03, 2017
 * Last updated : July 03, 2017
 *
 * @export
 * @param {*} input
 * @returns {boolean}
 */

export function isNative(input: any): boolean {

  /**
   * Used to match `RegExp`
   * [syntax characters]
   * (http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */

  const reRegExpChar: RegExp = /[\\^$.*+?()[\]{}|]/g;

  /**
   *  Function.prototype.toString.call(Object.prototype.hasOwnProperty)
   * => 'function hasOwnProperty() { [native code] }'
   * .replace(reRegExpChar, '\\$&')
   * => 'function hasOwnProperty\\(\\) \\{ \\[native code\\] \\}'
   *
   * .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?')
   * => 'function.*?\\(\\) \\{ \\[native code\\] \\}'
   *
   */

  const reIsNative: RegExp
    = RegExp(`^${
      Function.prototype.toString.call(Object.prototype.hasOwnProperty)
        .replace(reRegExpChar, '\\$&')
        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?')
      }$`);

  return input != null && reIsNative.test(input.toString());

}
