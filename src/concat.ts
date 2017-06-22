/**
 * Creates a new array concatenating array with any additional
 * arrays and/or values.
 *
 * @category Array
 *
 * First version: June 22, 2017
 * Last updated : June 22, 2017
 *
 * @export
 * @param {...any[]} inputs
 * @returns {any[]}
 */

export function concat(...inputs: any[]): any[] {

  const { length } = inputs;
  let output: any[] = [];

  for (let i: number = 0; i < length; i++) {
    if (Array.isArray(inputs[i])) {
      output = [...output, ...inputs[i]];
    } else {
      output.push(inputs[i]);
    }
  }

  return output;

}
