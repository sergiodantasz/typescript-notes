const a = 10;
const b: 20 = 20;
let c: "hi" = "hi";
// c = "hey"; // error
let d = 30 as const;

const personObj = {
  name: "sérgio" as const, // literal
  surname: "dantas", // string
};

function chooseColor(color: "red" | "green" | "black") {
  return color;
}
