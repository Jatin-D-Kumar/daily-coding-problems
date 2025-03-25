
function calculateTaskDurations(tasks) {
    const taskDurations = {};

    tasks.forEach(task => {
        const { employeeId, duration, startTime } = task;

        // If the employeeId doesn't exist in the taskDurations object, initialize it
        if (!taskDurations[employeeId]) {
            taskDurations[employeeId] = {
                totalDuration: 0,
                concurrentTasks: 0,
                taskDetails: []
            };
        }

        // Add the duration to the total duration for the employee
        taskDurations[employeeId].totalDuration += duration;

        // Check for concurrent tasks
       