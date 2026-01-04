// record
const person1: Record<string, string | number> = {
  name: "sérgio",
  surname: "dantas",
  age: 20,
};

type Person = {
  name?: string;
  surname?: string;
  age?: number;
};

// required
type PersonRequired = Required<Person>;

// partial
type PersonPartial = Partial<Person>;

// readonly
type PersonReadonly = Readonly<Person>;

// pick
type PersonPick = Pick<Person, "name" | "surname">;

// extract e exclude
type ABC = "A" | "B" | "C";
type CDE = "C" | "D" | "E";

type Excluded = Exclude<ABC, CDE>;
type Extracted = Extract<ABC, CDE>;

// unifying everything...
type MongoAccount = {
  _id: string;
  name: string;
  age: number;
};

type ApiAccount = Pick<MongoAccount, Exclude<keyof MongoAccount, "_id">> & {
  id: string;
};

function mapAccount(mongoAccount: MongoAccount): ApiAccount {
  const { _id, ...dataAccount } = mongoAccount;
  return { id: _id, ...dataAccount };
}

const mongoAccount: MongoAccount = {
  _id: "sdom9290jia0-2njjkj2",
  name: "sérgio",
  age: 20,
};

const apiAccount: ApiAccount = mapAccount(mongoAccount);

console.log(apiAccount);
