
function hammingDistance(str1, str2) {
    // Check if the strings are of the same length
    if (str1.length !== str2.length) {
        throw new Error("Strings must be of the same length");
    }

    let distance = 0;

    // Compare each character in the strings
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            distance++;
        }
    }

    return distance;
}

// Example usage:
const string1 = "karolin"