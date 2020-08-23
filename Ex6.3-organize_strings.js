// Ex6.3-organize_strings

// Take 2 strings s1 and s2 including only letters from a to z.
// Return a new sorted string, the longest possible, containing distinct letters, each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

const longest = (s1, s2) => {
  const joinedStr = s1.concat(s2);
  let resultStr = [];
  for (let char of joinedStr) {
    !resultStr.includes(char) && (resultStr = resultStr.concat(char));
  }
  return resultStr.sort().join("");
};

const a = "xyaabbbccccdefww";
const b = "xxxxyyyyabklmopq";
const c = "abcdefghijklmnopqrstuvwxyz";
console.log(longest(a, b));
console.log(longest(c, c));
