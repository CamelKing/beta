
import { toNumber } from './toNumber';

export function inRange(input: number | string, low: number | string, high: number | string = 0): boolean {

  const inputNum: number = toNumber(input);
  let lowNum: number = toNumber(low);
  let highNum: number = toNumber(high);

  if (lowNum > highNum) { [lowNum, highNum] = [highNum, lowNum]; }

  return highNum > inputNum && inputNum >= lowNum;

}
