// error here!
// type Person = {
//   name: string;
// };

interface Person {
  name: string;
}

interface Person {
  readonly surname: string;
  readonly addresses?: readonly string[];
}

const person: Person = {
  name: "sérgio",
  surname: "dantas",
  addresses: ["avenida brasil"],
};

person.name = "jorge";
// person.surname = 'amado' // surname is a read-only field
// person.addresses.push('bairro santa rita') // addresses is a read-only field

console.log(person);
