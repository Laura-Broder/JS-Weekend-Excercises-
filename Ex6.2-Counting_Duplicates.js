// Ex6.2-Counting_Duplicates

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

const array = [
  "Hello",
  "Good Day",
  "Your Welcome",
  "hotdog",
  "hamburgers",
  "iiiiiii",
];

const lttrCount = {};
let lttrArry;
let max = ["", 0];

function countLttrs(array) {
  array.forEach((phrase) => {
    // split each phrase to characters:
    lttrArry = phrase.toLowerCase().split("");
    // count the letters and add to an object:
    lttrArry.forEach((char) => {
      lttrCount[char] = lttrCount[char] + 1 || 1;
    });
  });
  delete lttrCount[" "];
  return lttrCount;
}

console.log(countLttrs(array));

for (const [lttr, count] of Object.entries(lttrCount)) {
  max[1] === count && max.push(lttr);
  max[1] < count && (max[0] = lttr) && (max[1] = count);
  console.log(max);
}
max.length === 2 &&
  console.log(`The letter that appears the most is "${max[0]}"`);
if (max.length > 2) {
  let maxLttrs = [max[0]];

  for (let j = 2; j < max.length; j++) {
    maxLttrs.push(max[j]);
    console.log(maxLttrs);
  }
  console.log(`The letters that appear the most are ${maxLttrs}`);
}
