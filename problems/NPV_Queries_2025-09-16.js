
/**
 * Function to calculate NPV given cash flows and discount rate.
 * @param {number[]} cashFlows - Array of cash flows.
 * @param {number} discountRate - Discount rate (as a decimal).
 * @returns {number} - The computed NPV.
 */
function calculateNPV(cashFlows, discountRate) {
    let npv = 0;

    for (let t = 0; t < cashFlows.length; t++) {
        npv += cashFlows[t] / Math.pow(1 + discountRate, t);
    }

    return npv;
}

/**
 * Handles multiple NPV queries.
 * @param {number[]} cashFlows - Array of cash flows.
 * @param {number[]} queries - Array of discount rate queries (as decimals).
 * @returns {number[]} - Array of resulting NPV values for each query.
 */
function npvQueries(cashFlows, queries) {
    const results = [];

    for (let i = 0; i < queries.length; i++) {
        const npv = calculateNPV(cashFlows, queries[i]);
        results.push(npv);
    }

    return results;
}

// Example usage
const cashFlows = [100, 100, 100]; // Cash flow for each period
const queries = [0.1, 0.2]; // Discount rates (10% and 20%)

const result = npvQueries(cashFlows, queries);
console.log(result); // Outputs the NPV results for each query
