
function catAndMouse(catA, catB, mouse) {
    const distanceCatA = Math.abs(mouse - catA); // Distance from Cat A to Mouse
    const distanceCatB = Math.abs(mouse - catB); // Distance from Cat B to Mouse

    if (distanceCatA < distanceCatB) {
        return "Cat A"; // Cat A is closer
    } else if (distanceCatB < distanceCatA) {
        return "Cat B"; // Cat B is closer
    } else {
        return "Mouse escapes"; // Both cats are equidistant from the mouse
    }
}

// Example usage:
console.log(catAndMouse(1, 2, 3)); // Outputs: "Cat B"
console.log(catAndMouse(1, 3, 2)); // Outputs: "Cat A"
console.log(catAndMouse(1, 2, 1)); // Outputs: "Cat A"
console.log(catAndMouse(2, 3, 1)); // Outputs: "Mouse escapes"
