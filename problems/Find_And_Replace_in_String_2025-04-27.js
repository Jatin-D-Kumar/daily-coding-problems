
function findAndReplace(str, oldSubstr, newSubstr) {
  // Use the replace method with a global regular expression to replace all occurrences
  const regExp = new RegExp(oldSubstr, 'g');
  return str.replace(regExp, newSubstr);
}

// Example usage:
const originalString = "Hello World! Welcome to the World!";
const resultString = findAndReplace(originalString, "World", "Universe");
console.log(resultString); // Output: "Hello Universe! Welcome to the Universe!"
