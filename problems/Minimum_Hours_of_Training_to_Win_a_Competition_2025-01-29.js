
function minimumTrainingDays(initialSkill, targetSkill, hoursPerDay, skillIncreasePerHour) {
    // Calculate the total skill increase needed
    const skillNeeded = targetSkill - initialSkill;

    // If the initial skill is already greater than or equal to the target skill
    if (skillNeeded <= 0) {
        return 0; // No training needed
    }

    // Calculate the total skill increase per day
    const skillIncreasePerDay = hoursPerDay * skillIncreasePerHour;

    // Calculate the number of days needed
    const daysNeeded = Math.ceil(skillNeeded / skillIncreasePerDay);

    return daysNeeded;
}

// Example usage:
const initialSkill = 10;
const targetSkill = 50;
const hoursPerDay = 2;
const skillIncreasePerHour = 5;

const result = minimumTrainingDays(initialSkill, targetSkill, hoursPerDay, skillIncreasePerHour);
console.log(`Minimum days of training required: ${result}`);
