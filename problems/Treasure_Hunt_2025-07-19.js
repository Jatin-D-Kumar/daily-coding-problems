function countUniqueCluePairs(clues, target) {
  const freq = new Map();
  let count = 0;
  
// Step 1: Build frequency map
  for (const num of clues) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }
