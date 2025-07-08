
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
             