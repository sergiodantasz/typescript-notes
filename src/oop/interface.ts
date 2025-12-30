interface InterNameSurname {
  // can't set access modifiers
  name: string;
  surname: string;
}

interface InterGetFullname {
  getFullname(): string;
}

interface InterPerson extends InterNameSurname, InterGetFullname {}

class Person implements InterPerson {
  constructor(public name: string, public surname: string) {}

  getFullname(): string {
    return `${this.name} ${this.surname}`;
  }
}

const person = new Person("Sérgio", "Dantas");
console.log(person.getFullname());

const personObj: InterPerson = {
  name: "Jorge",
  surname: "Amado",
  getFullname() {
    return `${this.name} ${this.surname}`;
  },
};
console.log(personObj.getFullname());
