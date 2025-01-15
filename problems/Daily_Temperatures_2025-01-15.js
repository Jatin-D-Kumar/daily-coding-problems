
function dailyTemperatures(temperatures) {
    const result = new Array(temperatures.length).fill(0);
    const stack = []; // This will store the indices of the temperatures array

    for (let i = 0; i < temperatures.length; i++) {
        // While there are indices in the stack and the current temperature is greater
        // than the temperature at the index stored at the top of the stack
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const index = stack.pop(); // Get the index of the last temperature
            result[index] = i - index; // Calculate the number of days until a warmer temperature
        }
        stack.push(i); // Push the current index onto the stack
    }

    return result;
}

// Example usage:
const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(temperatures)); // Output: [1, 1, 4, 2, 1, 1, 0, 0]
