
function maxDistance(houses) {
    let n = houses.length;
    let firstHouseColor = houses[0];
    let lastHouseColor = houses[n - 1];
    let leftIndex = 0;
    let rightIndex = n - 1;

    // Find the furthest house on left with different color than the first house
    while (leftIndex < n && houses[leftIndex] === firstHouseColor) {
        leftIndex++;
    }

    // Find the furthest house on right with different color than the last house
    while (rightIndex >= 0 && houses[rightIndex] === lastHouseColor) {
        rightIndex--;
    }

    let maxDist = 0;

    // If there is a different color house on the left
    if (leftIndex < n) {
   