
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
        const endTime = new Date(startTime).getTime() + duration * 60000; // Convert duration to milliseconds
        const isConcurrent = taskDurations[employeeId].taskDetails.some(existingTask => {
            const existingEndTime = new Date(existingTask.startTime).getTime() + existingTask.duration * 60000;
            return (new Date(existingTask.startTime).getTime() < endTime && new Date(existingTask.startTime).getTime() >= new Date(startTime).getTime()) ||
                   (new Date(startTime).getTime() < existingEndTime && new Date(startTime).getTime() >= new Date(existingTask.startTime).getTime());
        });

        i