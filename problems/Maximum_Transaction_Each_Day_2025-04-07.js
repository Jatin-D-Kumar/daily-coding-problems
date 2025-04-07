
function maxTransactionsPerDay(transactions) {
    const transactionDates = {};

    transactions.forEach(transaction => {
        // Convert each transaction timestamp to a date string (YYYY-MM-DD)
        const date = new Date(transaction).toISOString().split('T')[0];
        
        // Count occurrences of transactions for each date
        if (!transactionDates[date]) {
            transactionDates[date] = 0;
        }
        transactionDates[date]++;
    });

    // Finding the maximum transactions in a single day
    const maxTransactions = Math.max(...Object.values(transactionDates));
    
    return maxTransactions;
}

// Example usage
const transactions = [
    '2025-04-01T10:00:00Z',
    '2025-04-01T12:30:00Z',
    '2025-04-01T15:00:00Z',
    '2025-04-02T09:00:00Z',
    '2025-04-02T11:00:00Z',
    '2025-04-03T14:00:00Z',
    '2025-04-03T15:30:00Z',
    '2025-04-03T18:00:00Z',
    '2025-04-03T20:00:00Z',
];

console.log(maxTransactionsPerDay(transactions)); // Output: 4
