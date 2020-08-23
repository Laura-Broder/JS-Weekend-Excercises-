// Ex6.1-Mumbling

// This time no story, no theory. The examples below show you how to write function accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

const accum = (str) => {
  let newStr = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    newStr = newStr.concat(
      "-",
      str[i].toUpperCase(),
      str[i].toLowerCase().repeat(i),
    );
  }
  return newStr;
};

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));
