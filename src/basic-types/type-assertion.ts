const body1 = document.querySelector("body");
if (body1) body1.style.background = "red";

// non-null assertion operator (!) tells typescript compiler that body2 is definitely not null or undefined
const body2 = document.querySelector("body")!;
body2.style.background = "red";

// type assertion
const body3 = document.querySelector("body") as HTMLBodyElement;
body3.style.background = "red";

// probably won't never use it
const body4 = document.querySelector("body") as unknown as number;
