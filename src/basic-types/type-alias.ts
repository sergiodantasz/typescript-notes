type Age = number;
type Person = {
  name: string;
  age: Age;
  favColor?: string;
};

const p1: Person = {
  name: "sérgio",
  age: 20,
};

type RGB = "Red" | "Green" | "Blue";
type CMYK = "Cyan" | "Magenta" | "Yellow" | "Key";
type PreferredColor = RGB | CMYK;

const setPreferredColor: (person: Person, color: PreferredColor) => void = (
  person: Person,
  color: PreferredColor
) => {
  person.favColor = color;
};

console.log(p1);
setPreferredColor(p1, "Blue");
console.log(p1);
