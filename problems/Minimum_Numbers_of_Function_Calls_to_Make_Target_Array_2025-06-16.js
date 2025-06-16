
function minFunctionCalls(target) {
    // The logic is to work backwards from the target
    let calls = 0;

    while (target > 0) {
        // If target is even, we can assume it came from a doubling
        if (target % 2 === 0) {
            target /= 2; // reverse the doubling operation
        } else {
            target -= 1; // reverse the addition of 1
        }
        calls++; // count the operation
    }

    return calls;
}

// Example usage
const targetArray = 5; // any number you want to reach
console.log(minFunctionCalls(targetArray)); // Output the number of calls needed
