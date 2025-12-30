function squareOf(x: any) {
  if (typeof x === "number") return x * x;
  return null;
}

const squareOfTwoNumbers = squareOf(2);
const squareOfTwoStrings = squareOf("2");

if (squareOfTwoNumbers === null) {
  console.log("invalid");
} else {
  console.log(squareOfTwoNumbers * 200);
}

if (squareOfTwoStrings === null) {
  console.log("invalid");
} else {
  console.log(squareOfTwoStrings * 200);
}
