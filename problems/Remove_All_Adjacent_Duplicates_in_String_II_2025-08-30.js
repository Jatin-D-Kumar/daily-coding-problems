
function removeDuplicates(s, k) {
    const stack = [];

    for (let char of s) {
        // Check if the stack is not empty and the last element is the same as the current character
        if (stack.length > 0 && stack[stack.length - 1][0] === char) {
            // Increment the count of the last character in the stack
            stack[stack.length - 1][1]++;
        } else {
            // Push the new character onto the stack with a count of 1
            stack.push([char, 1]);
        }

        // If the count reaches k, we need to remove it
        if (stack.length > 0 && stack[stack.length - 1][1] === k) {
            stack.pop(); // Remove the last character group from the stack
        }
    }

    // Build the result string from the stack
    let result = '';
    for (let [char, count] of stack) {
        result += char.repeat(count); // Repea