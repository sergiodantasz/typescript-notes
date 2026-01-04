function uppercase(target: any, propertyKey: string | symbol) {
  let value: string;
  Object.defineProperty(target, propertyKey, {
    get() {
      console.log("get");
      return value;
    },
    set(newValue: string) {
      console.log("set");
      value = newValue.toUpperCase();
    },
    enumerable: true,
    configurable: true,
  });
}

class Person {
  @uppercase
  name: string;
  surname: string;

  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }
}

const sergio = new Person("sérgio", "dantas");
console.log(sergio.name);
