type Constructor = new (...args: any[]) => {};

function first() {
  return function <T extends Constructor>(target: T) {
    console.log("first decorator");
    return target;
  };
}

function second() {
  return function <T extends Constructor>(target: T) {
    console.log("second decorator");
    return target;
  };
}

// decorators are executed from bottom to top but the result is evaluated from top to bottom
@first()
@second()
class MyClass {
  constructor(public someAttr: string) {}
}

const instance = new MyClass("test");
