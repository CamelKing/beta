import { typeOf } from '../src/typeOf';

export function isTypedArray(input: any): boolean {

  /**
   * original regexp from lodash:
   * const reTypedTag: RegExp
   * = /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)\]$/;
   */


  return (typeOf(input).search(/(float(32|64)|(int|uint)(8|16|32)|uint8clamped)/) !== -1);

}
