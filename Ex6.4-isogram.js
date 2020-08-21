// Ex6.4-isogram

// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram. Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

const isIsogram = (str) => {
  const lowStr = str.toLowerCase();
  for (let char of lowStr) {
    let rgx = new RegExp(char, "ig");
    if (lowStr.match(rgx).length > 1) return false;
  }

  return true;
};

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
