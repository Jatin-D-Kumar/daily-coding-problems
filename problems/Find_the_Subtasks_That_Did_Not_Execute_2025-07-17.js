
function findMissingSubtasks(totalSubtasks, executedSubtasks) {
    // Create a Set from the executed subtasks for O(1) lookup
    const executedSet = new Set(executedSubtasks);
    
    // Filter the total subtasks to find those not in the executed set
    const missingSubtasks = totalSubtasks.filter(subtask => !executedSet.has(subtask));
    
    return missingSubtasks;
}

// Example usage:
const totalSubtasks = [1, 2, 3, 4, 5];
const executedSubtasks = [2, 3, 5];

const missing = findMissingSubtasks(totalSubtasks, executedSubtasks);
console.log(missing); // Output: [1, 4]
