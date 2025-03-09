
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
       