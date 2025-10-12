
function maxSetSizeAfterRemovals(nums) {
  // Step 1: Count the frequency of each element in the array
  const freqMap = new Map();
  nums.forEach(num => {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  });

  // Step 2: Sort the frequencies in descending order
  const freqArray = Array.from(freqMap.values()).sort((a, b) => b - a);

  let setSize = 0; // To store the final size of the set
  let removedCount = 