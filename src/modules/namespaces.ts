namespace MyNamespace1 {
  const pi = 3.14159;
  console.log(pi);
  export const e = 2.71828;
}

// console.log(pi) // it doesn't work
console.log(MyNamespace1.e); // it works because we exported "e"

namespace MyNamespace2 {
  const name = "sérgio";
  console.log(MyNamespace1.e);

  namespace MyOtherNamespace {
    let foo = "bar";
  }
}
