// Ex2.4-Unique

// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

const findUniq = (arr) => {
  const arrLength = arr.length;
  // loop threw th middle of the array
  for (i = 1; i < arrLength - 1; i++) {
    if (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1]) return arr[i];
  }

  // check the first item
  if (arr[0] !== arr[1] && arr[0] !== arr[2]) return arr[0];

  // check the last item
  if (
    arr[arrLength - 1] !== arr[arrLength - 2] &&
    arr[arrLength - 1] !== arr[arrLength - 3]
  )
    return arr[arr.length - 1];
};

console.log(findUniq([2, 1, 1, 1, 1]));
console.log(findUniq([0, 0, 0.55, 0, 0]));
