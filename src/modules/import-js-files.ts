// we must set allowJs to true in tsconfig.json
// now we can import any js files

import { sum, multiply } from "./assets/math";

const result1 = sum(1, 2) as number;
console.log(result1);

const result2 = multiply(10, 20) as number;
console.log(result2);
