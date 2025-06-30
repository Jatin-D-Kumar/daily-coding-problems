
function findStudentToReplaceChalk(chalk, dailyUsage) {
    const totalStudents = chalk.length;
    let totalChalk = chalk.reduce((acc, curr) => acc + curr, 0);
    
    // Find how many full cycles we can do 