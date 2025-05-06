
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
            
            // If indegree becomes 0, add it to the queue
            if (indegree[nextCourse] === 0) {
                queue.push(nextCourse);
            }
        }
    }
    
    // If there's a cycle, we can't finish all courses
    if (totalTime === 0 || indegree.some(i => i > 0)) {
        return -1; // Return -1 if it's not possible to complete all courses
    }
    
    return totalTime;
}

// Example usage:
const n = 5; // Number of courses
const relations = [[2, 1], [3, 1], [1, 4], [4, 5]]; // Prerequisites
const time = [3, 2, 1, 4, 5]; // Time to complete each course

console.log(minimumTime(n, relations, time)); // Output: minimum time to complete all courses
