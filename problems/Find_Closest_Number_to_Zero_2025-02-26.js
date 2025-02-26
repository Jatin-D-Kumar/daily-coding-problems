
function findClosestToZero(numbers) {
    if (numbers.length === 0) {
        return null; // or any other value indicating no numbers
    }

    let closest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        const current = numbers[i];

        // Check if the current number is closer to zero
        if (Math.abs(current) < Math.abs(closest) || 
            (Math.abs(current) === Math.abs(closest) && current > closest)) {
            closest = current;
        }
    }

    return closest;
}

// Example usage:
const numbers = [-4, -1, 2, 3, 1];
console.log(findClosestToZero(numbers)); // Output: 1
