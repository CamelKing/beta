/**
 * Perform a SameValueZero comparison between two values
 * to determine if they are equivalent. Return the result as 
 * true or false.
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

export function eq(input1: any, input2: any): boolean {

  return (input1 === input2) || (input1 !== input1 && input2 !== input2);

}
