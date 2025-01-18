
function successfulPairs(spells, potions, success) {
    // Sort the potions array
    potions.sort((a, b) => a - b);
    
    const result = [];
    
    for (let spell of spells) {
        // Calculate the minimum potion power needed for this spell
        const minPotionPower = success / spell;
        
        // Use binary search to find the first potion that meets the requirement
        let left = 0;
      