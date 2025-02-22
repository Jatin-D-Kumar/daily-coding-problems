
function managerOfLargestDepartment(employees) {
    const departmentSizes = {};
    const departmentManagers = {};

    // Loop through given employees to populate our objects
    for (const employee of employees) {
        const { manager, department } = employee;

        // Count the size of the department
        if (!departmentSizes[department]) {
            departmentSizes[department] = 0;
            departmentManagers[department] = manager; // Associate manager with department
        }
        departmentSizes[department]++;
    }

    // Determine the department with the largest size
    let largestDepartment = null;
    let maxSize = 0;
    
    for (const department in departmentSizes) {
        if (departmentSizes[department] > maxSize) {
            maxSize = departmentSizes[department];
            largestDepartment = department;
        }
    }

    // Return the manager of the largest department
    return largestDepartment ? departmentManagers[largestDepartment] : null;
}

// Example usage: