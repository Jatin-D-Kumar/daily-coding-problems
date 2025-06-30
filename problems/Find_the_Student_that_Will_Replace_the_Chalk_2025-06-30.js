
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