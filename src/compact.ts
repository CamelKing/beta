/**
 * Creates an array with all falsey values removed.
 * The values false, null, 0, "", undefined, and NaN are falsey.
 *
 * First version: June 21, 2017
 * Last updated : June 21, 2017
 *
 * @export
 * @template T
 * @param {T[]} input
 * @returns {T[]}
 */

export function compact<T>(input:T[]):T[] {
  const output:T[] = [];
  if (input != null) {
    input.forEach( (item:T) => { if (item) output.push(item); } );
  }
  return output;
}
