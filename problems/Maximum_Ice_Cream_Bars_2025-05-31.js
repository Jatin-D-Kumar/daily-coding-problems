
function maxIceCream(costs, coins) {
    // Sort the costs in ascending order
    costs.sort((a, b) => a - b);
    
    let count = 0; // To count the number of ice cream bars
    for (let cost of costs) {
        if (coins >= cost) {
            coins -= cost; // Deduct the cost from the budget
            count++; // Increment the count of ice cream bars
        } else {
            break; // If we can't afford the next ice cream bar, break the loop
        }
    }
    
    return count; // Return the total number of ice cream bars bought
}

// Example usage:
const costs = [1, 3, 2, 4, 1];
const coins = 7;
console.log(maxIceCream(costs, coins)); // Output: 4
