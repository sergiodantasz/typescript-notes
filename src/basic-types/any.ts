let y; // any is the default type

function returnArg(arg: any) {
  return arg;
}

const x = 10;
const num = returnArg(x);

console.log(num, typeof num);
