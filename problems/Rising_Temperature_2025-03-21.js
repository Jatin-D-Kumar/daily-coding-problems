
function dailyTemperatures(temperatures) {
    const result = new Array(temperatures.length).fill(0);
    const stack = []; // This will store the indexes of the temperatures

    for (let i = 0; i < temperatures.length; i++) {
        // While there is a stack and the current temperature is greater than the temperature
        // at the index stored at the top of the stack
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const idx = stack.pop(); // Get index of the last stored temperature
            result[idx] = i - idx; // Calculate the number of days until a warmer temperature
        }
        // Push the current index onto the stack
        stack.push(i);
    }
    
    return result;
}

// Example usage:
const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
const result = dailyTemperatures(temperatures);
console.log(result); // Output: [1, 1, 4, 2, 1, 1, 0, 0]
