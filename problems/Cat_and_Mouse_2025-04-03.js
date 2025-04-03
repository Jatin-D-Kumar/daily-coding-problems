
function catAndMouse(catA, catB, mouse) {
    const distanceCatA = Math.abs(mouse - catA); // Distance from Cat A to Mouse
    const distanceCatB = Math.abs(mouse - catB); // Distance from Cat B to Mouse

    if (distanceCatA < distanceCatB