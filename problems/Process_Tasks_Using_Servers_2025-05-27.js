
function processTasks(servers, tasks) {
    // Create a priority queue for available servers
    let serverQueue = [...servers].sort((a, b) => a - b);
    let taskCompletion = new Array(tasks.length).fill(0);
    
    // Timers for each server
    let serverTimers = Array(servers.length).fill(0);

    for (let i = 0; i < tasks.length; i++) {
        // Find the next available server (this is the server with the minimum time)
        let minIn