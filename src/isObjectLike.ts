
/**
 * Checks if value is object-like.
 * A value is object-like if it's not null and has a typeof result of "object".
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

export function isObjectLike(input: any): boolean {

  return input != null && typeof input === 'object';

}
