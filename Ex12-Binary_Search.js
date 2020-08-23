// Binary Search

// Binary Search is searching technique which works on Divide and Conquer approach. It used to search any element in a sorted array.
// As compared to linear, binary search is much faster with Time Complexity of O(logN) whereas linear search algorithm works in O(N) time complexity.
// Given a sorted array of numbers. The task is to search a given element   in the array using Binary search.

// Examples :
// Input : arr[] = {1, 3, 5, 7, 8, 9}
//         x = 5
// Output : Element found!

// Input : arr[] = {1, 3, 5, 7, 8, 9}
//         x = 6
// Output : Element not found!

const binarySearch = (arr, x) => {
  let checkLength = arr.length;
  while (checkLength > 0) {
    checkLength = Math.floor(arr.length / 2);
    if (arr[checkLength] === x) {
      return "Element found!";
    } else if (arr[checkLength] > x) {
      arr.splice(checkLength);
    } else if (arr[checkLength] < x) arr.splice(0, checkLength);
  }
  return "Element not found!";
};
console.log(binarySearch([1, 3, 5, 7, 8, 9], 5));
console.log(binarySearch([1, 3, 5, 7, 8, 9], 6));
