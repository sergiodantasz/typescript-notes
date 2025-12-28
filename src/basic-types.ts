// basic types
let name: string = "sérgio";
let age: number = 20;
let height: number = 1.95;
let isAdult: boolean = true;
let someSymbol: symbol = Symbol("someSymbol");
let bigNumber: bigint = 10n;

// arrays
let numberArray: Array<number> = [1, 2, 3];
let numberArray2: number[] = [1, 2, 3];
let stringArray: Array<string> = ["a", "b", "c"];
let stringArray2: string[] = ["a", "b", "c"];

// objects
let person: { name: string; age: number; isAdult?: boolean } = {
  name: "jorge",
  age: 30,
};

// functions
function sum(x: number, y: number): number {
  return x + y;
}
const sum2: (x: number, y: number) => number = (x, y) => x + y;
const sum3: (x: number, y: number) => number = function (x, y) {
  return x + y;
};

// any
function returnArg(arg: any) {
  return arg;
}

// void
function noReturn(...args: Array<any>): void {}
const person2 = {
  name: "isa",
  surname: "dantas",
  showName(): void {
    console.log(this.name + " " + this.surname);
  },
};

// objects
const objA: {
  key1: string;
  readonly key2: string;
  key3?: string;
  [key: string]: unknown;
} = {
  key1: "key1",
  key2: "key2",
};
objA.key1 = "another value";
objA.key3 = "new key 3";
objA.newKey = "another key";

// arrays
function multiplyNumbers(...nums: Array<number>): number {
  return nums.reduce((prod, num) => prod * num, 1);
}
function toUpperCase(...args: string[]) {
  return args.map((value) => value.toUpperCase());
}
const names: ReadonlyArray<string> = ["luiz", "pedro"];

// tuple
const data1: [number, string, string?, ...number[]] = [1, "sérgio"];
data1[0] = 100;
data1[1] = "jorge";
data1[2] = "brasil";
data1[3] = 200;
const data2: readonly [number, string] = [2, "maria"];

// undefined and any
function createPerson(
  firstName: string,
  lastName?: string
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}
function squareOf(x: any) {
  if (typeof x === "number") return x * x;
  return null;
}
const squareOfTwoNumbers = squareOf(2);
const squareOfTwoStrings = squareOf("2");
// if (squareOfTwoNumbers === null) {
//   console.log("invalid");
// } else {
//   console.log(squareOfTwoNumbers * 200);
// }
// if (squareOfTwoStrings === null) {
//   console.log("invalid");
// } else {
//   console.log(squareOfTwoStrings * 200);
// }

// never
function createError(): never {
  throw new Error("some error");
}

// enum
enum Colors { // starts at 0 by default
  RED = 2,
  BLUE, // 3
  YELLOW = 5,
  PINK = "any value",
  GREEN = 200,
  BROWN, // 201
}
// console.log(Colors);
// console.log(Colors["2"]);
// console.log(Colors[2]);
// console.log(Colors.RED);

// unknown
let x: unknown;
x = 100;
x = "jorge";
x = "200";
// x = 200;
const y = 800;
if (typeof x === "number") console.log(x + y);

// union
function addOrConcat(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") return a + b;
  if (typeof a === "string" && typeof b === "string") return a + b;
  return `${a}${b}`;
}

// literal
const a = 10;
const b: 20 = 20;
let c: "hi" = "hi";
// c = "hey";
let d = 30 as const;
const personObj = {
  name: "sérgio" as const, // literal
  surname: "dantas",
};
function chooseColor(color: "red" | "green" | "black") {
  return color;
}

// alias
type Age = number;
type Person = {
  name: string;
  age: Age;
  favColor?: string;
};
const p1: Person = {
  name: "sérgio",
  age: 20,
};
type RGB = "Red" | "Green" | "Blue";
type CMYK = "Cyan" | "Magenta" | "Yellow" | "Key";
type PreferredColor = RGB | CMYK;
const setPreferredColor: (person: Person, color: PreferredColor) => void = (
  person: Person,
  color: PreferredColor
) => {
  person.favColor = color;
};

// intersection
type HasName = { name: string };
type HasSurname = { surname: string };
type HasAge = { age: number };
type Person2 = HasName & HasSurname & HasAge;
const p2: Person2 = {
  name: "Sérgio",
  surname: "Dantas",
  age: 20,
};
type AB = "A" | "B";
type AC = "A" | "C";
type Inter = AB & AC; // "A"

// functions
type MapStringsCallbackFn = (item: string) => string;
function mapStrings(arr: string[], callbackFn: MapStringsCallbackFn): string[] {
  const newArr: string[] = [];
  for (let c of arr) {
    newArr.push(callbackFn(c));
  }
  return newArr;
}
const abc = ["a", "b", "c"];
const mappedAbc = mapStrings(abc, (item) => item.toUpperCase());

// structural
type ValidateUserFn = (user: User, sentValue: User) => boolean;
type User = {
  username: string;
  password: string;
};
const validateUser: ValidateUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};
const dbUser = { username: "sérgio", password: "123" };
const sentUser = { username: "sérgio", password: "123", permissions: "" };
// typescript doesn't care about the identity, only about the content (i.e. the content of User type)
const isLoggedIn = validateUser(dbUser, sentUser);

// type assertion
const body1 = document.querySelector("body");
if (body1) body1.style.background = "red";
const body2 = document.querySelector("body")!; // non-null assertion operator tells typescript compiler that body2 is definitely not null or undefined
body2.style.background = "red";
const body3 = document.querySelector("body") as HTMLBodyElement; // type assertion
body3.style.background = "red";
const body4 = document.querySelector("body") as unknown as number;
