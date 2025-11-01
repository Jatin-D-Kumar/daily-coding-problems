
function sellersWithNoSales(sellers, sales) {
    // Create a set of sellers who made a sale
    let sellersWithSales = new Set();

    // Loop through the sales and add the seller's name to the set
    sales.forEach(sale => 