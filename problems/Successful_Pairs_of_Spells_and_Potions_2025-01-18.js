
function successfulPairs(spells, potions, success) {
    // Sort the potions array
    potions.sort((a, b) => a - b);
    
    const result = [];
    
    for (let spell of spells) {
        // Calculate the 