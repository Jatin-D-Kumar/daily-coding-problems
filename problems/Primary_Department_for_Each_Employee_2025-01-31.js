
// Sample data structure for employees
const employees = [
    {
        id: 1,
        name: "Alice",
        departments: [
            { name: "HR", priority: 2 },
            { name: "Finance", priority: 1 }
        ]
    },
    {
        id: 2,
        name: "Bob",
        departments: [
            { name: "IT", priority: 3 },
            { name: "HR", priority: 1 }
        ]
    },
    {
        id: 3,
        name: "Charlie",
        departments: [
            { name: "Finance", priority: 2 },
            { name: "IT", priority: 1 }
        ]
    }
];

// Function to determine the primary department for each employee
function getPrimaryDepartments(employees) {
    return employees.map(employee => {
        // Find the department with the highest priority
        const primaryDepartment = employee.departments.reduce((prev, current) => {
            return (prev.priority > current.priority) ? prev : current;
        });

        return {
            id: employee.id,
            name: employee.name,
            primaryDepartment: primaryDepartment.name
        };
    });
}

// Get the primary departments for each employee
const result = getPrimaryDepartments(employees);

// Output the result
console.log(result);
