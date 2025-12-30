class Person {
  constructor(
    private name: string,
    private surname: string,
    private age: number,
    private _cpf: string
  ) {}

  get cpf(): string {
    return this._cpf;
  }

  set cpf(cpf: string) {
    this._cpf = cpf;
  }
}

const p1 = new Person("sérgio", "dantas", 20, "000.000.000-00");

console.log(p1.cpf); // "000.000.000-00"
p1.cpf = "111.111.111-11";
console.log(p1.cpf); // "111.111.111-11"
