
function dailyTemperatures(temperatures) {
    const result = new Array(temperatures.length).fill(0);
    const stack = []; // This will store the indexes of the temperatures

    for (let i = 0; i < temperatures.length; i++) {
        // While there is a stack and the current temperature is greater than the temperature
        // at the index stored at the top of the stack
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const idx = stack.pop(); // Get index of the last stored temperature
            result[idx] = i - idx; // Calculate the number of days until a 