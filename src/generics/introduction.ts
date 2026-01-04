const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredArray = array.filter((value) => value < 5);

// generic type
type FilterCallbackFn<U> = (value: U, index?: number, array?: U[]) => boolean;

// here the function is generic, but the type isn't
// type FilterCallbackFn = <U>(value: U, index?: number, array?: U[]) => boolean;

// infers the type when the function is called
function myFilter<T>(array: T[], callbackfn: FilterCallbackFn<T>): T[] {
  const newArray = [];
  for (const i in array) {
    const element = array[i]!;
    if (callbackfn(element)) {
      newArray.push(element);
    }
  }
  return newArray;
}

const myFilteredArray = myFilter(array, (value) => value < 5);
