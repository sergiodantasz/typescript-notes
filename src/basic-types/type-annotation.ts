// basic types
let name: string = "sérgio";
let age: number = 20;
let height: number = 1.95;
let isAdult: boolean = true;
let someSymbol: symbol = Symbol("someSymbol");
let bigNumber: bigint = 10n;

// array
let numberArray: Array<number> = [1, 2, 3];
let numberArray2: number[] = [1, 2, 3];
let stringArray: Array<string> = ["a", "b", "c"];
let stringArray2: string[] = ["a", "b", "c"];

// object
let person: { name: string; age: number; isAdult?: boolean } = {
  name: "jorge",
  age: 30,
};

// function
function sum(x: number, y: number): number {
  return x + y;
}
const sum2: (x: number, y: number) => number = (x, y) => x + y;
const sum3: (x: number, y: number) => number = function (x, y) {
  return x + y;
};
