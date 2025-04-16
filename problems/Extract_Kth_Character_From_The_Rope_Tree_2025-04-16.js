
function extractKthCharacter(rope, k) {
  // Validate if the Kth character exists
  if (k < 1 || k > rope.length) {
    return "Invalid K value"; // Or return