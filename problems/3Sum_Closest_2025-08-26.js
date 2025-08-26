
function threeSumClosest(nums, target) {
    // Sort the array
    nums.sort((a, b) => a - b);
    let closestSum = Infinity;

    for (let i = 0; i < num