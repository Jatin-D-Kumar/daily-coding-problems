function countUniqueCluePairs(clues, target) {
  const freq = new Map();
  let count = 0;
  
// Step 1: Build frequency map
  for (const num of clues) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

// Step 2: Iterate through unique keys
  for (const [num, val] of freq.entries()) {
    const complement = target - num;

  if (freq.has(complement)) {
      if (num === complement) {
        // Use floor(freq / 2) pairs when num === complement
        count += Math.floor(freq.get(num) / 2);
      } else {
        const pairs = Math.min(freq.get(num), freq.get(complement));
        count += pairs;
      }
