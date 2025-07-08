
function minTimeToRevert(initial, target, operations) {
    // Create a map to store the time for each operation
    const operationTime = {};
    for (const [op, time] of operations) {
        oper