
function findXorBeauty(arr) {
    let n = arr.length;
    let xorBeauty = 0;

    // Loop through each unique pair
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            xorBeauty += arr[i] ^ arr[j]; // Calculate XOR and add to the beauty
        }
    }

    return xorBeauty;
}

// Example usage:
const arr = [1, 2, 3];
console.log(findXorBeauty(arr)); // Output: 6
