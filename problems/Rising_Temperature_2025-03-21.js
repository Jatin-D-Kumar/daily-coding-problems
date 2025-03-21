
function dailyTemperatures(temperatures) {
    const result = new Array(temperatures.length).fill(0);
    const stack = []; // This will store the indexes of the temperatures

    for (let i = 0; i < temperatures.length; i++) {
        // While there is a stack and the current temperature is greater than the tem