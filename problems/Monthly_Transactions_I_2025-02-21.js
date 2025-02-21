
const transactions = [
    { date: '2023-01-15', amount: 100 },
    { date: '2023-01-20', amount: 200 },
    { date: '2023-02-10', amount: 150 },
    { date: '2023-02-15', amount: 300 },
    { date: '2023-03-05', amount: 250 },
    { date: '2023-03-20', amount: 400 },
];

function getMonthlyTotals(transactions) {
    const monthlyTotals = {};

    transactions.forEach(transaction => {
        const date = new Date(transaction.date);
        const monthYear = `${date.getFullYear()}-${date.getMonth() + 1}`; // Format: YYYY-MM

        if (!monthlyTotals[monthYear]) {
            monthlyTotals[monthYear] = 0;
        }
        monthlyTotals[monthYear] += transaction.amount;
    });

    return monthlyTotals;
}

const totals = getMonthlyTotals(transactions);
console.log(totals);
