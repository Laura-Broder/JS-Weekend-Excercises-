// Ex5.1–trimming_string
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

const strTrim = (str) => str.slice(1, -1);

console.log(strTrim("The morning is upon us"));
console.log(strTrim("'0'"));
