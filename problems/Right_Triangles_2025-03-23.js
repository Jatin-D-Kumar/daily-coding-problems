
function isRightTriangle(a, b, c) {
    // Sort the sides to ensure we can identify the longest side
    const sides = [a, b, c].sort((x, y) => x - y);
    
    // Assign the sides to variables
    const [side1, side2, hypotenu