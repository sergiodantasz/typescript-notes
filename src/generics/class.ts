class Person<T, U = number> {
  constructor(public name: T, public age: U) {}
}

const p1 = new Person("bruno", 15);
const p2 = new Person<string>("carlos", 90);
const p3 = new Person<string, bigint>("jorge", 20n);

class Stack<T> {
  private count = 0;
  private elements: { [k: number]: T } = {};

  push(element: T): void {
    this.elements[this.count] = element;
    this.count++;
  }

  pop(): T | void {
    if (this.isEmpty()) return;
    this.count--;
    const element = this.elements[this.count];
    delete this.elements[this.count];
    return element;
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  get size(): number {
    return this.count;
  }

  showStack(): void {
    console.log("--- Stack ---");
    for (const key in this.elements) {
      console.log(`${key} - ${this.elements[key]}`);
    }
  }
}

const stack = new Stack<number | string>();

stack.push(100);
stack.push(200);
stack.push(300);
stack.push("hey");
stack.push(10);

stack.showStack();

stack.pop();

stack.showStack();
