
function decrementalStringConcatenation(input) {
    let result = '';

    for (let i = input.length; i > 0; i--) {
        result += input.slice(0, i);
    }

    return result;
}

// Example usage:
const inputString = "abc";
console.log(decrementalStringConcatenation(in