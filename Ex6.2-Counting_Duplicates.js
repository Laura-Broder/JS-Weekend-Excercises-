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

// make an object al all the letters and their occurrences:
const countChars = (str) => {
  const charCount = {};
  const charArry = str.toLowerCase().split("");
  charArry.forEach((char) => {
    charCount[char] = charCount[char] + 1 || 1;
  });
  return charCount;
};

// creat an object of all chars that repeat more then once and their occurrences:
const duplicateCount = (str) => {
  const repeatCharObj = {};
  const countCharsObj = countChars(str);
  for (const [char, count] of Object.entries(countCharsObj)) {
    if (count > 1) repeatCharObj[char] = count;
  }
  return repeatCharObj;
};

// print output depending on the results:
const printResult = (str) => {
  const results = duplicateCount(str);
  if (Object.values(results).length === 0) {
    console.log("0 # no characters repeat more than once");
  } else {
    console.log(
      `${Object.values(results).length} # characters repeat more than once:`,
    );
    console.table(results);
  }
};

printResult("abcde");
printResult("aabbcde");
printResult("aabBcde");
printResult("indivisibility");
printResult("Indivisibilities");
printResult("aA11");
printResult("ABBA");
