
function minimumDistanceToTarget(arr, target) {
    let lastIndex = -1;
    let minDistance = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            if (lastIndex !== -1) {
                // Calculate the distance to the last occurrence
                const distance = i - lastIndex;
                // Update the minim