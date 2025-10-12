
function maxSetSizeAfterRemovals(nums) {
  // Step 1: Count the frequency of each element in the array
  const freqMap = new Map();
  nums.forEach(num => {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  });

  // Step 2: Sort the frequencies in descending order
  const freqArray = Array.from(freqMap.values()).sort((a, b) => b - a);

  let setSize = 0; // To store the final size of the set
  let removedCount = 0; // Count of elements removed from the set

  // Step 3: Try removing elements from the set
  for (let count of freqArray) {
    if (count > 1) {
      removedCount += count - 1;  // Remove all but one of the occurrences
      setSize += 1;  // One element remains in the set
    } else {
      setSize += 1;  // This element can remain as is
    }
  }

  return setSize;
}

// Example usage
const nums = [4, 3, 1, 4, 2, 1, 2, 3];
console.log(maxSetSizeAfterRemovals(nums)); // Output the size of the resulting set
