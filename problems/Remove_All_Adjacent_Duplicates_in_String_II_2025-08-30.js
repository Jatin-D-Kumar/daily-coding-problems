
function removeDuplicates(s, k) {
    const stack = [];

    for (let char of s) {
        // Check if the stack is not empty and the last element is the same as the current