
function maxTransactionsPerDay(transactions) {
    const transactionDates = {};

    transactions.forEach(transaction => {
        // Convert each transaction timesta