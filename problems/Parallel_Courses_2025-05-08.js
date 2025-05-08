
function canFinish(numCourses, prerequisites) {
    // Step 1: Create an adjacency list and a degree count array
    const adjList = new Array(numCourses).fill(0).map(() => []);
    const indegree = new Array(numCourses).fill(0);
    
    // Step 2: Fill the adjacency list and indegree array
    for (const [course, prereq] of prerequisites) {
        adjList[prereq].push(course); // prereq -> course
        indegree[course]++;
    }

    // Step 3: Initia