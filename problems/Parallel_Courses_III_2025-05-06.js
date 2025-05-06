
function minimumTime(n, relations, time) {
    const indegree = new Array(n).fill(0);
    const graph = new Array(n).fill(0).map(() => []);
    const minTime = new Array(n).fill(0);
    
    // Build the graph and indegree array based on courses and relations
    for (const [a, b] of relations) {
        graph[b - 1].pu