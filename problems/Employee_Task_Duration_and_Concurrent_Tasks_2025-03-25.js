
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

        if (isConcurrent) {
            taskDurations[employeeId].concurrentTasks += 1;
        }

        // Store the task details
        taskDurations[employeeId].taskDetails.push({ duration, startTime });
    });

    return taskDurations;
}

// Example usage:
const tasks = [
    { employeeId: 1, duration: 30, startTime: '2023-10-01T09:00:00Z' },
    { employeeId: 1, duration: 45, startTime: '2023-10-01T09:15:00Z' },
    { employeeId: 2, duration: 60, startTime: '2023-10-01T10:00:00Z' },
    { employeeId: 1, duration: 20, startTime: '2023-10-01T10:30:00Z' },
];

const result = calculateTaskDurations(tasks);
console.log(result);
