
function redistributeApples(n, k) {
    // If there are no boxes, we can't distribute apples
    if (k === 0) return [];

    // Calculate the number of apples per box and the remainder
    const applesPerBox = Math.floor(n / k);
