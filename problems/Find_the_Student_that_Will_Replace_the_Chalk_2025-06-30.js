
function findStudentToReplaceChalk(chalk, dailyUsage) {
    const totalStudents = chalk.length;
    let totalChalk = chalk.reduce((acc, curr) => acc + curr, 0);
    
    // Find how many full cycles we can do with total chalk
    const fullCycles = Math.floor(totalChalk / dailyUsage);
    const chalkUsedInFullCycles = fullCycles * dailyUsage;
    
    // Remaining chalk after full cycles
    let remainingChalk = tot