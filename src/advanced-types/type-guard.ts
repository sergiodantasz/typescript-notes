type Person = { type: "person"; name: string };
type Animal = { type: "animal"; color: string };
type PersonOrAnimal = Person | Animal;

class Student implements Person {
  type: "person" = "person";

  constructor(public name: string) {}
}

function showName(obj: PersonOrAnimal) {
  // type guards:
  // if ("name" in obj) console.log(obj.name);
  // if (obj instanceof Student) console.log(obj.name);
  switch (obj.type) {
    case "animal": {
      console.log(obj.color);
      break;
    }
    case "person": {
      console.log(obj.name);
      break;
    }
  }
}

showName(new Student("sérgio"));
showName({ type: "animal", color: "red" });
