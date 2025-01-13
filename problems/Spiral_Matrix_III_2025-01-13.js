
function spiralMatrixIII(R, C, r0, c0) {
    const result = [];
    const directions = [
        [0, 1],   // right
        [1, 0],   // down
        [0, -1],  // left
        [-1, 0]   // up
    ];
    
    let x = r0, y = c0;
    let steps = 0; // Number of steps to take in the current direction
    let directionIndex = 0; // Start with the first direction (right)
    
    while (result.length < R * C) {
        // Take steps in the current direction
        for (let i = 0; i < steps; i++) {
            // Check if the current position is within bounds
            if (x >= 0 && x < R && y >= 0 && y < C) {
                result.push([x, y]);
            }
            // Move in the current direction
            x += directions[directionIndex][0];
            y += directions[directionIndex][1];
        }
        
        // Change direction
        directionIndex = (directionIndex + 1) % 4;
        
        // After completing two directions, increase the number of steps
        if (directionIndex % 2 =