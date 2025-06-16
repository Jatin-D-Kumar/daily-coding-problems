
function minFunctionCalls(target) {
    // The logic is to work backwards from the target
    let calls = 0;

    while (target > 0) {
        // If target is even, we can