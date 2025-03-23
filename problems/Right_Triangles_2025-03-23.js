
function isRightTriangle(a, b, c) {
    // Sort the sides to ensure we can identify the longest side
    const sides = [a, b, c].sort((x, y) => x - y);
    
    // Assign the sides to variables
    const [side1, side2, hypotenuse] = sides;

    // Check the Pythagorean theorem
    return (side1 * side1 + side2 * side2) === (hypotenuse * hypotenuse);
}

// Example usage:
console.log(isRightTriangle(3, 4, 5)); // true
console.log(isRightTriangle(5, 12, 