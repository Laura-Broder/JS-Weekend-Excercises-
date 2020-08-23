// Ex5.5-Abbreviate_two_words
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// Patrick Feeney => P.F

const convertToInit = (name) => {
  let newName = name.replace(/\s/, ".");
  const dotIndex = newName.indexOf(".");
  newName = `${newName.substring(0, 1)}${newName.substring(
    dotIndex,
    dotIndex + 2,
  )}`;

  return newName.toUpperCase();
};

console.log(convertToInit("Sam Harris"));
console.log(convertToInit("Patrick Feeney"));
