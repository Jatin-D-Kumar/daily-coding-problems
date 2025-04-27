
function findAndReplace(str, oldSubstr, newSubstr) {
  // Use the replace method with a global regular expression to replace all occurrences
  const regExp = new RegExp(oldSubstr, 'g');