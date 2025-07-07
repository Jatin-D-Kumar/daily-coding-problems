
function nextGreaterElement(nums1, nums2) {
    const result = new Map();
    const stack = [];

    // Traverse nums2 to find the next greater elements
    for (let num of nums2) {
        w