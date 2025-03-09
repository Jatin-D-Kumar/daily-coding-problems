
function flipAndInvertImage(image) {
    // Iterate through each row in the image
    for (let i = 0; i < image.length; i++) {
        // Flip the image horizontally
        let left = 0;
        let right = image[i].length - 1;
        
        while (left <= right) {
            // Swap the left and right elements
            // and also invert their values
            if (left === right) {
                // If both pointers meet (odd-length row), just invert the middle element
                image[i][left] = image[i][left] ^ 1; // Invert
            } else {
                // Swap and invert
                [image[i][left], image[i][right]] = [image[i][right] ^ 1, image[i][left] ^ 1];
            }

            left++;
            right--;
        }
    }

    return image;
}

// Example usage:
const image = [
    [1, 1, 0],
    [1, 0, 0],
    [0, 0, 0]
];

const result = flipAndInvertImage(image);
console.log(result);
// Output: [[1, 0, 0], [0, 1, 1], [0, 0, 0]]
