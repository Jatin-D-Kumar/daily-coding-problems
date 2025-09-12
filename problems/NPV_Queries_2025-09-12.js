
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
    
  