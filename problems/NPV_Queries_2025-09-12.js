
/**
 * Calculate the Net Present Value (NPV)
 * @param {number[]} cashFlows - Array of cash flows (can be positive or negative)
 * @param {number} discountRate - The discount rate (as a decimal, e.g., 10% as 0.1)
 * @return {number} - The calculated NPV
 */
function calculateNPV(cashFlows, discountRate) {
    let npv = 0;
    
    for (let t = 0; t < cashFlows.length; t++) {
        npv += cashFlows[t] / Math.pow(1 + discountRate, t);
    }
    
    return npv;
}

/**
 * Process NPV Queries
 * @param {number[]} cashFlows - Array of cash flows
 * @param {number[]} queries - Array of discount rates (as percentages, e.g., 10 for 10%)
 * @return {number[]} - Array of NPVs corresponding to each query
 */
function npvQueries(cashFlows, queries) {
    return queries.map(rate => {
        // Convert percentage to decimal
        const discountRate = rate / 100;
        return calculateNPV(cashFlows, 