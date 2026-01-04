// Array is generic
const myArray: Array<number> = [1, 2, 3, 4, 5];
console.log(myArray);

// Promise is generic
async function myPromise1() {
  // the return type is automatically set
  return 1;
}

myPromise1().then((value) => {
  console.log(value);
});

async function myPromise2(): Promise<number> {
  // in that case we need to manually infer the return type
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

myPromise2().then((value) => {
  console.log(value);
});
