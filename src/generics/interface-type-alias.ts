interface SomeInterface<T, U = number> {
  attr1: T;
  attr2: T;
  attr3: U;
}

const obj1: SomeInterface<string> = {
  attr1: "hey",
  attr2: "hi",
  attr3: 10,
};

type SomeType<T = boolean, U = bigint> = {
  attr1: T;
  attr2: U;
};

const obj2: SomeType = {
  attr1: true,
  attr2: 100n,
};
