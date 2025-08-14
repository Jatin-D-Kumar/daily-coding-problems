
function maxBuilding(n, restrictions) {
    // Include the endpoints
    restrictions.push([0, 0]);
    restrictions.push([n, 0]);
    
    // Sort restrictions by position
   