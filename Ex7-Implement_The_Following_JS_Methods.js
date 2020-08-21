// Ex7-Implement_The_Following_JS_Methods

// Implement the following methods -
// -	Filter
// -	ForEach
// -	Map
// Using only for(), array and objects (without other js methods)

// ---------------------------
// -	Filter

const largerThen1 = (num1) => num1 > 1;

const myFilter = (arr1, test) => {
  let result1 = [];
  for (i = 0; i < arr1.length; i++) {
    if (test(arr1[i])) result1 = [...result1, arr1[i]];
  }
  return result1;
};
// ---------------------------

// ---------------------------
// -	ForEach

const double = (num2) => num2 * 2;

const myForEach = (arr2, toDo) => {
  for (i = 0; i < arr2.length; i++) {
    arr2[i] = toDo(arr2[i]);
  }
};
// ---------------------------

// ---------------------------
// -	Map

const myMap = (arr3, toDo) => {
  let result3 = [];
  for (i = 0; i < arr3.length; i++) {
    result3[i] = toDo(arr3[i]);
  }
  return result3;
};
// ---------------------------

// Print the results

let myArray1 = [1, 1, 2, 7, 80];
let myArray2 = [1, 1, 2, 7, 80];

// Filter results:
console.log(
  `The result of myFilter on the array [${myArray1}] is a new array:`,
);
console.log(myFilter(myArray1, largerThen1));
console.log(`The original array was not changed`);
console.log(myArray1);

// ForEach results:
console.log(`The return value of myForEach is undefined:`);
console.log(myForEach(myArray1, double));
console.log(`The myForEach changed the original array to:`);
console.log(myArray1);

// Map results:
console.log(`The result of myMap on the array [${myArray2}] is a new array:`);
console.log(myMap(myArray2, double));
console.log(`The original array was not changed`);
console.log(myArray2);
