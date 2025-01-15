
function dailyTemperatures(temperatures) {
    const result = new Array(temperatures.length).fill(0);
    const stack = []; // This will store the indices of the temperatures array

    for (let i = 0; i < temperatures.length; i++) {
        // While there are indices in the stack and the current temperature