
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
        const activeMinutes = userActivity[userId].si