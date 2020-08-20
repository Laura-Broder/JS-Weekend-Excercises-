// Ex5.3-To_Camel_Case
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

const rgxLowerCase = /(-|_)[a-z]/gi;
const rgxDashUnderscore = /(-|_)/g;
const toCamelCase = (str) => {
  let newStr = str.replace(rgxLowerCase, (str) => str.toUpperCase());
  newStr = newStr.replace(rgxDashUnderscore, "");
  return newStr;
};

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
