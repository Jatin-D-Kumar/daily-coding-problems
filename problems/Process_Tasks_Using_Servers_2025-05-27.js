
function processTasks(servers, tasks) {
    // Create a priority queue for available servers
    let serverQueue = [...servers].sort((a, b) => a - b