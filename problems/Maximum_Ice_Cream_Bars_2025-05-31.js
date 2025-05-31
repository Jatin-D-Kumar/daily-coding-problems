
function maxIceCream(costs, coins) {
    // Sort the costs in ascending order
    costs.sort((a, b) => a - b);
    
    let count = 0; // To count the number of ice cream bars
    for (let cost of costs) {
        if (coins >= cost) {
            coins -= cost; // Deduct the cost from t