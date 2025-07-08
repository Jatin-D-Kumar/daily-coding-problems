
function minTimeToRevert(initial, target, operations) {
    // Create a map to store the time for each operation
    const operationTime = {};
    for (const [op, time] of operations) {
        operationTime[op] = time;
    }

    // Function to calculate the minimum time to revert
    function calculateRevertTime(current) {
        if (current === initial) {
            return 0; // No time ne