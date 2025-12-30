const objA: {
  key1: string;
  readonly key2: string;
  key3?: string;
  [key: string]: unknown; // any other properties must have such type
} = {
  key1: "key1",
  key2: "key2",
};

objA.key1 = "another value";
// objA.key2 = "key 2"; // read-only field
objA.key3 = "new key 3";
objA.newKey = "another key";
