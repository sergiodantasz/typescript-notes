class Person {
  constructor(
    readonly name: string,
    readonly surname: string,
    protected readonly age: number,
    private readonly cpf: string
  ) {}

  getAge(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf;
  }
  getFullname(): string {
    return `${this.name} ${this.surname}`;
  }
}

class Student extends Person {
  constructor(
    name: string,
    surname: string,
    age: number,
    cpf: string,
    public course: string // it's needed to use public, private, protected and/or readonly so this.prop = prop is automatically set
  ) {
    super(name, surname, age, cpf);
  }

  override getFullname(): string {
    return `student: ${super.getFullname()}`;
  }
}

class Customer extends Person {
  override getFullname(): string {
    return `customer: ${super.getFullname()}`;
  }
}

const p1 = new Person("laiane", "fernandes", 22, "000.000.000-00");
const s1 = new Student("sérgio", "dantas", 20, "000.000.000-00", "IT");
const c1 = new Customer("jorge", "amado", 32, "000.000.000-00");

console.log(p1.getFullname());
console.log(s1.getFullname());
console.log(c1.getFullname());
