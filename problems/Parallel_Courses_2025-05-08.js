
function canFinish(numCourses, prerequisites) {
    // Step 1: Create an adjacency list and a degree count array
    const adjList = new Array(numCourses).fill(0).map(() => []);
    const indegree = new Array(numCourses).fill(0);
    
    // Step 2: Fill the adjacency list and indegree array
    for (const [course, prereq] of prerequisites) {
        adjList[prereq].push(course); // prereq -> course
        indegree[course]++;
    }

    // Step 3: Initialize a queue with all courses that have no prerequisites
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }

    // Step 4: Process the queue
    let processedCount = 0;
    while (queue.length > 0) {
        const course = queue.shift();
        processedCount++;
        
        // Decrease the indegree of neighbor courses
        for (const nextCourse of adjList[co