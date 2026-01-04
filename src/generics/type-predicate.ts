function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

function sum<T>(...args: T[]): number {
  return args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      return sum + value;
    }
    return sum;
  }, 0);
}

console.log(sum(1, 2, 3));
console.log(sum("a", "b", "c"));
