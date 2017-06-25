import { toNumber } from './toNumber';

export function toFinite(input: any): number {

  if (!input) return 0;

  const output: number = toNumber(input);

  return output === Infinity ? Number.MAX_VALUE
    : output === -Infinity ? -Number.MAX_VALUE
      : output !== output ? 0
        : output;

}
