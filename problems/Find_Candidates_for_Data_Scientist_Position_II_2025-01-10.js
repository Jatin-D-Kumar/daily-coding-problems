
// Sample data: array of candidates
const candidates = [
    { name: "Alice", skills: ["Python", "Machine Learning"], experience: 5 },
    { name: "Bob", skills: ["Java", "Data Analysis"], experience: 3 },
    { name: "Charlie", skills: ["Python", "Deep Learning"], experience: 4 },
    { name: "David", skills: ["R", "Statistics"], experience: 6 },
    { name: "Eve", skills: ["Python", "Data Visualization"], experience: 2 }
];

// Function to find candidates for the Data Scientist position
function findDataScientistCandidates(candidates, requiredSkills, minExperience) {
    return candidates.filter(candidate => {
        const hasRequiredSkills = requiredSkills.every(skill => candidate.skills.includes(skill));
        const hasEnoughExperience = candidate.experience >= minExperience;
        return hasRequiredSkills && hasEnoughExperience;
    });
}

// Define the criteria for the Data Scientist position
const requiredSkills = ["Python", "Machine Learning"];
const minExperience = 3;

// Find suitable candidates
const suitableCandidates = findDataScientistCandidates(candidates, requiredSkills, minExperience);

// Output the results
console.log("Suitable Candidates for Data Scientist Position:");
console.log(suitableCandidates);
