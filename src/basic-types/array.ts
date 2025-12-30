function multiplyNumbers(...nums: Array<number>): number {
  return nums.reduce((prod, num) => prod * num, 1);
}

function toUpperCase(...args: string[]) {
  return args.map((value) => value.toUpperCase());
}

const names1: ReadonlyArray<string> = ["luiz", "pedro"];
const names2: readonly string[] = ["jorge", "mateus"];
