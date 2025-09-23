
function findNumberOfLIS(nums) {
    if (nums.length === 0) return 0;

    const n = nums.length;
    const lengths = new Array(n).fill(1); // Length of the LIS ending at each index
    const counts = new Array(n).fill(1);  // Count of the LIS ending at each index

    let maxLen = 1; // Maximum length of increasing subsequence

    // Fill lengths and counts arrays
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                // If nums[i] can extend the subsequence ending at nums[j]
                if (lengths[j] + 1 > lengths[i]) {
                    lengths[i] = lengths[j] + 1; // Update the length
   