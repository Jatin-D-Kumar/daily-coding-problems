
function flipAndInvertImage(image) {
    return image.map(row => {
        // Flip the row horizontally and invert colors
        return row.reverse().map(pixel => pixel === 0 ? 1 : 0);
    });
}

// Example usage:
