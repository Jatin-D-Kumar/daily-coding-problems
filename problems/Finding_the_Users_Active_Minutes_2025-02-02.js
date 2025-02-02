
function findActiveMinutes(logs, k) {
    const userActivity = {};

    // Process each log entry
    for (const [userId, time] of logs) {
        // Use a Set to store unique active minutes for each user
        if (!userActivity[userId]) {
            userActivity[userId] = new Set();
        }
        // Add the active minute to the user's set
        userActivity[userId].add(time);
    }

    // Prepare the result array
    const result = new Array(k).fill(0);

    // Count the number of unique active minutes for each user
    for (const userId in userActivity) {
        const activeMinutes = userActivity[userId].size;
        if (activeMinutes <= k) {
            result[activeMinutes - 1]++;
        }
    }

    return result;
}

// Example usage:
const logs = [
    [1, 1],
    [2, 2],
    [2, 3],
    [1, 2],
    [1, 3],
    [1, 3],
    [3, 1]
];
const k = 3;

console.log(findActiveMinutes(logs, k)); // Output: [2, 1, 0]
