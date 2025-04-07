
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
const transac