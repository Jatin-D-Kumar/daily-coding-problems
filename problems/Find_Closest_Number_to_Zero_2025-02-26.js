
function findClosestToZero(numbers) {
    if (numbers.length === 0) {
        return null; // or any other value indicating no numbers
    }

    let closest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        const current = numbers[i];

        // C