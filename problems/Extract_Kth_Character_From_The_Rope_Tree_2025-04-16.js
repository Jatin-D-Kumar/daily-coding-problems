
function extractKthCharacter(rope, k) {
  // Validate if the Kth character exists
  if (k < 1 || k > rope.length) {
    return "Invalid K value"; // Or return an appropriate error message
  }
  
  // Return the Kth character (1-based index, so we access rope[k-1])
  return rope[k - 1];
}

// Test cases
console.log(extractKthCharacter("hello", 3)); // "l"
console.log(extractKthCharacter("world", 5)); // "d"
console.log(extractKthCharacter("rope", 6)); // "Invalid K value"
