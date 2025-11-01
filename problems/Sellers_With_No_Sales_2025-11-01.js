
function sellersWithNoSales(sellers, sales) {
    // Create a set of sellers who made a sale
    let sellersWithSales = new Set();

    // Loop through the sales and add the seller's name to the set
    sales.forEach(sale => {
        sellersWithSales.add(sale.seller);
    });

    // Filter out the sellers who have no sales
    return sellers.filter(seller => !sellersWithSales.has(seller.name));
}

// Example usage:

// Sellers list
const sellers = [
    { name: 'Alice' },
    { name: 'Bob' },
    { name: 'Charlie' },
    { name: 'David' }
];

// Sales list
const sales = [
    { seller: 'Alice', amount: 100 },
    { seller: 'Bob', amount: 200 }
];

const result = sell