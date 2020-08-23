// Interview Questions (objects, arrays, numbers)

// What would be the output of following code?
let arrA = [0, 1, 2, 3, 4, 5];
let arrB = arrA;
arrB[0] = 42;
console.log(arrA);
// --> [0, 1, 2, 3, 4, 5]

// What would be the output of following code?
arrA = [0, 1, 2, 3, 4, 5];
arrB = arrA.slice();
arrB[0] = 42;
console.log(arrA);
// --> [0, 1, 2, 3, 4, 5]

//  What would be the output of following code?
arrA = [
  { prop1: "value of array A!!" },
  { someProp: "also value of array A!" },
  3,
  4,
  5,
];
arrB = arrA;
arrB[0].prop1 = 42;
console.log(arrA);
// --> arrA = [
//   { prop1: 42 },
//   { someProp: "also value of array A!" },
//   3,
//   4,
//   5,
// ]

// What would be the output of following code?
arrA = [
  { prop1: "value of array A!!" },
  { someProp: "also value of array A!" },
  3,
  4,
  5,
];
arrB = arrA.slice();
arrB[0].prop1 = 42;
arrB[3] = 20;
console.log(arrA);
// --> arrA = [
//   { prop1: "value of array A!!" },
//   { someProp: "also value of array A!" },
//   3,
//   4,
//   5,
// ]
