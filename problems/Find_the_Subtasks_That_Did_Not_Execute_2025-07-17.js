
function findMissingSubtasks(totalSubtasks, executedSubtasks) {
    // Create a Set from the executed subtasks for O(1) lookup
    const executedSet = new Set(executedSubtasks);
    
    // Filter the total subtasks to find those not