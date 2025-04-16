
function extractKthCharacter(rope, k) {
  // Validate if the Kth character exists
  if (k < 1 || k > rope.length) {
    return "Invalid K value"; // Or return an appropriate error message
  }
  
  // Return the Kth character (1-based index, so we access rope[k-1])
  return rope[k - 1];
}

// Test cases
console.log(e