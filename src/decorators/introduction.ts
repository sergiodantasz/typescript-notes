@myDecorator
class Animal {
  constructor(public name: string, public color: string) {}
}

type Constructor = new (...args: any[]) => any;

function myDecorator<T extends Constructor>(target: T): T {
  return class extends target {
    public name: string;
    public color: string;

    constructor(...args: any[]) {
      super(...args);
      this.name = args[0];
      this.color = args[1];
    }
  };
}

// const AnimalDecorated = decorator(Animal);

const lion = new Animal("lion", "yellow");
console.log(lion);
