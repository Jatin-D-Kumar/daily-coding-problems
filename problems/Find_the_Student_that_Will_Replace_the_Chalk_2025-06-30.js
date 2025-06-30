
function findStudentToReplaceChalk(chalk, dailyUsage) {
    const totalStudents = chalk.length;
    let totalChalk = chalk.reduce((acc, curr) => acc + curr, 0);
    
    // Find how many full cycles we can do with total chalk
    const fullCycles = Math.floor(totalChalk / dailyUsage);
    const chalkUsedInFullCycles = fullCycles * dailyUsage;
    
    // Remaining chalk after full cycles
    let remainingChalk = totalChalk - chalkUsedInFullCycles;

    // Determine which student will run out of chalk first
    for (let i = 0; i < totalStudents; i++) {
        // If the remaining chalk can cover the current student's usage
        if (remainingChalk >= chalk[i]) {
            remainingChalk -= chalk[i];
        } else {
            return i; // Return the index of the student who will run out first
        }
    }

    return -1; // In case no one runs out, though not expected in this problem.
}

// Example usage:
const chalk = [5, 1, 5];
const dailyUsage = 4;

console.log(findStudentToReplaceChalk(chalk, dailyUsage)); // Output: 0
