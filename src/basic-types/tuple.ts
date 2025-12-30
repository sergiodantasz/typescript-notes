const data1: [number, string, string?, ...number[]] = [1, "sérgio"];

console.log(data1);

data1[0] = 100;
data1[1] = "jorge";
data1[2] = "brasil";
data1[3] = 200;
data1[4] = 500;

console.log(data1);

const data2: readonly [number, string] = [2, "maria"];

// data2[0] = 10 // read-only key
