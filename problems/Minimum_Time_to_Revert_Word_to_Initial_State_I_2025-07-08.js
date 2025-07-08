
function minTimeToRevert(initial, target, operations) {
    // Create a map to store the time for each operation
    const operationTime = {};
    for (const [op, time] of operations) {
        operationTime[op] = time;
    }

    // Function to calculate the minimum time to revert
    function calculateRevertTime(current) {
        if (current === initial) {
            return 0; // No time needed if already at initial state
        }

        let minTime = Infinity;

        // Try all possible operations
        for (const [op, time] of operations) {
            // Apply the operation to the current string
            let newString = applyOperation(current, op);
            if (newString !== null) {
                // Recursively calculate the time for the new string
                const timeForNewString = calculateRevertTime(newString);
                if (timeForNewString !== Infinity) {
                    minTime = Math.min(minTime, time + timeForNewString);
                }
            }
        }

        return minTime;
    }

    // Start the calculation from the target string
    return calculateRevertTime(target);
}

// Example function to apply an operation (this needs to be defined based on the problem)
function applyOperation(current, operation) {
    // Implement the logic to apply the operation to the current string
    // For example, if the operation is a character replacement
    // return newString or null if the operation is not applicable
}

// Example usage
const initial = "abc";
const target = "cba";
const operations = [
    ["replace_a_with_b", 1],
    ["replace_b_with_c", 2],
    ["replace_c_with_a", 3],
    // Add more operations as needed
];

const result = minTimeToRevert(initial, target, operations);
console.log(result);
