
function maxBuilding(n, restrictions) {
    // Include the endpoints
    restrictions.push([0, 0]);
    restrictions.push([n, 0]);
    
    // Sort restrictions by position
    restrictions.sort((a, b) => a[0] - b[0]);

    let m = restrictions.length;
    // Propagate height constraints from left to right
    for (let i = 1; i < m; i++) {
        con