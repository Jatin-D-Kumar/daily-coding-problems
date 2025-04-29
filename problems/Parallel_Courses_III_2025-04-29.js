
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

    // 