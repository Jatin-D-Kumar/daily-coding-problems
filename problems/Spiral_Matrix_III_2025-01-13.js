
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
          