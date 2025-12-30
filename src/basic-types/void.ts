function noReturn1(...args: Array<any>): void {
  return;
}

const noReturn2: () => void = () => {};

// void is the default function return type
function noReturn3() {}

const person2 = {
  name: "isa",
  surname: "dantas",
  showName(): void {
    console.log(this.name + " " + this.surname);
  },
};
