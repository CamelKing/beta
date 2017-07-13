/**
 * Converts value to a plain object flattening inherited enumerable
 * string keyed properties of value to own properties of the plain
 * object.
 *
 * @category Language
 *
 * First version: July 13, 2017
 * Last updated : July 13, 2017
 *
 * @export
 * @param {object} input
 * @returns {object}
 */

import { copyKeys } from './copyKeys';

export function toPlainObject(input: object): object {

  return copyKeys.all({ source: input });

}
