let x: unknown;

x = 100;
x = "jorge";
x = "200";

const y = 800;

if (typeof x === "number") {
  console.log(x + y);
} else {
  console.log("x is not a number");
}

x = 200;

if (typeof x === "number") {
  console.log(x + y);
} else {
  console.log("x is not a number");
}
