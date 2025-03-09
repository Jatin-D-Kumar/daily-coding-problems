
function flipAndInvertImage(image) {
    // Iterate through each row in the image
    for (let i = 0; i < image.length; i++) {
        // Flip the image horizontally
        let left = 0;
        let right = image[i].length - 1;
        
        