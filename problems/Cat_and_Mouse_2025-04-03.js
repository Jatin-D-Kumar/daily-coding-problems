
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

// Exam