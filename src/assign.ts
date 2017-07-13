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

import { ObjectOptions } from './constant';
import { copyKeys } from './copyKeys';

function _assign({ target, sources, goDeep }: ObjectOptions): object {

  // make a copy of target, using flat copyKeys.all() as this function
  // only works on own string property names.
  // TODO: should replace this with the object cloning
  // function once it is ready.

  // goDeep default is false
  goDeep = goDeep || false;

  let output: object = copyKeys.select({
    source: Object(target),
    goDeep,
    enumOnly: true
  });

  if (sources != null && sources.length > 0) {

    sources.forEach((source: object) => {

      output = copyKeys.select({
        source,
        target: output,
        goDeep,
        enumOnly: true
      });

    });

  }

  return output;

}

// tslint:disable-next-line:no-namespace
export namespace assign {

  export const to: (target: object, ...sources: object[]) => object =
    (target: object, ...sources: object[]) =>
      _assign({ target, sources });

  export const into: (target: object, ...sources: object[]) => object =
    (target: object, ...sources: object[]) =>
      _assign({ target, sources, goDeep: true });

}
