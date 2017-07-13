/**
 * Assigns own enumerable string keyed properties of source objects
 * to the destination object.
 * Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * Note: one can use Object.assign() and aschieve similar result.
 *       the purpose of this function is to setup for specialised
 *       assign functions (assignIn, assignWith, etc.)
 *
 * @category Object
 *
 * First version: July 13, 2017
 * Last updated : July 13, 2017
 *
 * @export
 * @param {object} target
 * @param {...object[]} sources
 * @returns {object}
 */

import { copyProperties } from './copyProperties';

export function assign(target: object, ...sources: object[]): object {

  // make a copy of target, using flat copyProperties() as this function
  // only works on own string property names.
  // TODO: should replace this with the object cloning
  // function once it is ready.

  let output: object = copyProperties({
    source: Object(target),
    target,
    goDeep: false,
    enumOnly: true,
    symbolKeys: false
  });

  if (sources != null && sources.length > 0) {

    sources.forEach((source: object) => {

      output = copyProperties({
        source,
        target: output,
        goDeep: false,
        enumOnly: true,
        symbolKeys: false
      });

    });

  }

  return output;

}
