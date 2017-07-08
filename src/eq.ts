/**
 * Perform a SameValueZero comparison between two values
 * to determine if they are equivalent. Return the result as
 * true or false.
 *
 * Note: for references (object, string, array, etc),
 * the reference is being used for comparison rather
 * than the contents.
 *
 * @category Language
 *
 * First version: June 23, 2017
 * Last updated : June 23, 2017
 *
 * @export
 * @param {*} input1
 * @param {*} input2
 * @returns {boolean}
 */

export function eq<T>(input1: T, input2: T): boolean {
  return (input1 === input2) || (input1 !== input1 && input2 !== input2);
}
