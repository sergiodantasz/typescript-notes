type MapStringsCallbackFn = (item: string) => string;

function mapStrings(arr: string[], callbackFn: MapStringsCallbackFn): string[] {
  const newArr: string[] = [];
  for (let c of arr) {
    newArr.push(callbackFn(c));
  }
  return newArr;
}

const abc = ["a", "b", "c"];

const mappedAbc = mapStrings(abc, (item) => item.toUpperCase());

console.log(abc);
console.log(mappedAbc);
