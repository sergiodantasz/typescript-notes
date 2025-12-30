type TypeNameSurname = {
  // can't set access modifiers
  name: string;
  surname: string;
};

type TypeGetFullname = {
  getFullname: () => string;
};

type TypePerson = TypeNameSurname & TypeGetFullname;

// it could also be "... extends TypeNameSurname, TypeGetFullname"
class Person implements TypePerson {
  constructor(public name: string, public surname: string) {}

  getFullname(): string {
    return `${this.name} ${this.surname}`;
  }
}

const person = new Person("Sérgio", "Dantas");
console.log(person.getFullname());
