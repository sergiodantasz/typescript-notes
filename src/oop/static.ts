class Person {
  static defaultAge = 0;

  constructor(
    private name: string,
    private surname: string,
    private cpf: string,
    private age?: number
  ) {}

  static sayHi(): void {
    console.log("Hi!");
  }

  static createPerson(
    name: string,
    surname: string,
    cpf: string,
    age?: number
  ) {
    return new Person(name, surname, cpf, age || this.defaultAge);
  }
}

Person.sayHi();

const p1 = Person.createPerson("sérgio", "dantas", "000.000.000-00", 20);
console.log(p1);
