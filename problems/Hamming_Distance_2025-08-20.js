
function hammingDistance(str1, str2) {
    // Check if the strings are of the same length
    if (str1.length !== str2.length) {
        throw new Error("Strings must be of the same length");
    }

    let distance = 0;

    // Compare each character in the strings
    f