
function findActiveMinutes(logs, k) {
    const userActivity = {};

    // Process each log entry
    for (const [userId, time] of logs) {
        // Use a Set to store unique active minutes for each user
        if (!userActivity[userId]) {
            userActivity[userId] = new Set();
        }
        // Add 