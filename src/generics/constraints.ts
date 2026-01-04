type GetKeyFn = <O, K extends keyof O>(obj: O, key: K) => O[K];

const getKey: GetKeyFn = (obj, key) => obj[key];

const animal = {
  name: "lion",
  color: "yellow",
  vaccines: ["vaccine 1", "vaccine 2"],
};

const vaccines = getKey(animal, "vaccines");
console.log(vaccines);

function getLength<T extends { length: number }>(something: T) {
  return something.length;
}

const length = getLength(vaccines);
console.log(length);
