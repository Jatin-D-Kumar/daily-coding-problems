
function minimumTime(n, relations, time) {
    const indegree = new Array(n).fill(0);
    const graph = new Array(n).fill(0).map(() => []);
    const minTime = new Array(n).fill(0);
    
    // Build the graph and indegree array based on courses and relations
    for (const [a, b] of relations) {
        graph[b - 1].push(a - 1); // b must be finished before a
        indegree[a - 1]++;
    }
    
    // Queue for processing
    const queue = [];
    
    // Initialize the minTime with the time to complete each course
    for (let i = 0; i < n; i++) {
        minTime[i] = time[i];
        // Add courses with no prerequisites to the queue
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }
    
    let totalTime = 0;
    
    while (queue.length > 0) {
        const course = queue.shift();
        totalTime = Math.max(totalTime, minTime[course]); // track maximum time taken so far
        
        for (const nextCourse of graph[course]) {
            // Decrease the indegree of nextCourse
            indegree[nextCourse]--;
            // Update the minimum time needed to complete the nextCourse
            minTime[nextCourse] = Math.max(minTime[nextCourse], minTime[course] + time[nextCourse]);
            
            // If indegree becomes 0,