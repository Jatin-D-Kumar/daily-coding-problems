
const employees = [
    { id: 1, name: 'Alice', managerId: null }, // CEO
    { id: 2, name: 'Bob', managerId: 1 },
    { id: 3, name: 'Carol', managerId: 1 },
    { id: 4, name: 'David', managerId: 1 },
    { id: 5, name: 'Eve', managerId: 1 },
    { id: 6, name: 'Frank', managerId: 1 },
    { id: 7, name: 'Grace', managerId: 2 },
    { id: 8, name: 'Hannah', managerId: 2 },
    { id: 9, name: 'Irving', managerId: 3 },
    { id: 10, name: 'Jack', managerId: 3 },
    { id: 11, name: 'Karen', managerId: 4 },
    { id: 12, name: 'Larry', managerId: 5 },
    { id: 13, name: 'Mallory', managerId: 6 },
    // Add more employees as needed
];

function managersWithAtLeastFiveDirectReports(employees) {
    // Create a map to count direct reports for each manager
    const reportCount = {};

    // Count the reports
    employees.forEach(employee => {
        const managerId = employee.managerId;
        if (managerId !== null) { // Only consider employees with a manager
            reportCount[managerId] = (reportCount[managerId] || 0) + 1;
        }
    });

    // Collect managers with at least 5 direct reports
    const managersWithReports = [];
    employees.forEach(employee => {
        if (reportCount[employee.id] >= 5) {
            managersWithReports.push(employee);
        }
    });

    return managersWithReports;
}

// Using the function
const result = managersWithAtLeastFiveDirectReports(employees);
console.log(result);
