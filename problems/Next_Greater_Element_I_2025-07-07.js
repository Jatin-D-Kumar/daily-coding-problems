
function nextGreaterElement(nums1, nums2) {
    const result = new Map();
    const stack = [];

    // Traverse nums2 to find the next greater elements
    for (let num of nums2) {
        while (stack.length > 0 && stack[stack.length - 1] < num) {
            const smallerNum = stack.pop();
            result.set(smallerNum, num);
        }
        stack.push(num);
    }

    // For any remaining elements in the stack, there is no next greater element
    while (stack.leng