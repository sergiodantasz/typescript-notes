// union
function addOrConcat(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") return a + b;
  if (typeof a === "string" && typeof b === "string") return a + b;
  return `${a}${b}`;
}

// intersection
type HasName = { name: string };
type HasSurname = { surname: string };
type HasAge = { age: number };

type Person2 = HasName & HasSurname & HasAge;

const p2: Person2 = {
  name: "Sérgio",
  surname: "Dantas",
  age: 20,
};

type AB = "A" | "B";
type AC = "A" | "C";

type Inter = AB & AC; // "A"
