export function chunk<T>(input: T[], chunkSize: number = 1): T[][] {

  const chunkCount: number = (input == null || chunkSize < 0) ? 0 : Math.ceil(input.length / chunkSize);

  const output: T[][] = Array(chunkCount);

  for (let i: number = 0; i < chunkCount; i++) {
    const start: number = i * chunkSize;
    output[i] = input.slice(start, start + chunkSize);
  }

  return output;

}
