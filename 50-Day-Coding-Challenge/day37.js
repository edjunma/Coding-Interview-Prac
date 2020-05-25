// Day 37 Coding Challenge
// Create a function that will convert a string in an array containing the ASCII codes of each character

function getCharCodes(s) {
  let ar = [];

  for (let i = 0; i < s.length; i++) {
    var code = s.charCodeAt(i);
    ar.push(code);
  }
  return ar;
}