
function minimumTime(n, relations, time) {
    const graph = Array.from({ length: n + 1 }, () => []);
    const inDegree = new Array(n + 1).fill(0);
    const dp = new Array(n + 1).fill(0);

    // Build the graph and in-degree count
    for (const [u, v] of relations) {
        graph[u].push(v);
        inDegree[v]++;
    }

    const queue = [];
    const completionOrder = [];

    // Initialize the queue with courses that have no prerequisites
    for (let i = 1; i <= n; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
            dp[i] = time[i - 1]; // Set the time for the course itself
        }
    }

    // Process the graph in a topological fashion
    while (queue.length > 0) {
        const course = queue.shift();
        completionOrder.push(course);

        for (const neighbor of graph[course]) {
            // Update the minimum completion time for the dependent course
            dp[neighbor] = Math.max(dp[neighbor], dp[course] + time[neighbor - 1]);
            inDegree[neighbor]--;

            // If in-degree of the neighbor becomes zero, add it to the queue
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    // The minimum time to complete all courses is the max