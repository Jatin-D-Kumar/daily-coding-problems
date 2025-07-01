
function flipAndInvertImage(image) {
    return image.map(row => {
        // Flip the row horizontally and invert colors
        return row.reverse().map(pixel => pixel === 0 ? 1 : 0);
    });
}

// Example usage:
const image = [
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0]
];

const flippedAndInverted = flipAndInvertImage(image);
console.log(flippedAndInverted);
/*
Output:
[
    [1, 0, 0],
    [0, 1, 0],
    [1, 1, 1]
]
*/
