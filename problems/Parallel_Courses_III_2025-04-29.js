
function minimumTime(n, relations, time) {
    const graph = Array.from({ length: n + 1 }, () => []);
    const inDegree = new Array(n + 1).fill(0);
    const dp = new Array(n + 1).fill(0);

    // Build the graph and in-degree count
    for (const [u, v] of relations) {
        graph[u].push(v);
        inDegree[v]++;