
function minimumTrainingDays(initialSkill, targetSkill, hoursPerDay, skillIncreasePerHour) {
    // Calculate the total skill increase needed
    const skillNeeded = targetSkill - initialSkill;

    // If the initial skill is already greater than or equal to the target skill
    if (skillNeeded <