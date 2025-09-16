
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
function npvQueri