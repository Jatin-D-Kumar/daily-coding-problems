
function maxSetSizeAfterRemovals(nums) {
  // Step 1: Count the frequency of each element in the array
  const freqMap = new Map();
  nums.forEach(num => {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  