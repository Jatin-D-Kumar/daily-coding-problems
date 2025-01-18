
function successfulPairs(spells, potions, success) {
    // Sort the potions array
    potions.sort((a, b) => a - b);
    
    const result = [];
    
    for (let spell of spells) {
        // Calculate the minimum potion power needed for this spell
        const minPotionPower = success / spell;
        
        // Use binary search to find the first potion that meets the requirement
        let left = 0;
        let right = potions.length;
        
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (potions[mid] < minPotionPower) {
                left = mid + 1; // Move right
            } else {
                right = mid; // Move left
            }
        }
        
        // The number of successful pairs for this spell
        result.push(potions.length - left);
    }
    
    return result;
}

// Example usage:
const spells = [10, 20, 30];
const potions = [5, 15, 25];
const success = 100;

console.log(successfulPairs(spells, potions, success)); // Output: [3, 3, 2]
