// approach 1

type Sum1 = {
  (x: number): number;
  (x: number, y: number): number;
  (x: number, y: number, ...args: number[]): number;
};

const sum1: Sum1 = (x: number, y?: number, ...args: number[]) => {
  if (args.length > 0) {
    return args.reduce((sum, value) => sum + value, 0) + x + (y || 0);
  }
  return x + (y || 0);
};

console.log(sum1(1));
console.log(sum1(1, 2));
console.log(sum1(1, 2, 3));

// approach 2

type Sum2 = ((a: number, b: number) => number) &
  ((a: string, b: string) => number);

const sum2: Sum2 = (a, b) => {
  return 1;
};

// approach 3

function sum3(m: number, n: number): number;
function sum3(m: string, n: string): number;

function sum3(m: number | string, n: number | string): number {
  return 1;
}
