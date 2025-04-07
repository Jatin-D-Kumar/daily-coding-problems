
function maxTransactionsPerDay(transactions) {
    const transactionDates = {};

    transactions.forEach(transaction => {
        // Convert each transaction timestamp to a date string (YYYY-MM-DD)
        const date = new Date(transaction).toISOString().split('T')[0];
        
        // Count occurrences of transactions for each