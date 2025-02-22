
function managerOfLargestDepartment(employees) {
    const departmentSizes = {};
    const departmentManagers = {};

    // Loop through given employees to populate our objects
    for (const employee of employees) {
        const { manager, department } = employee;

        // Count the size of the department
        if (!departmentSizes[department]) {
            departmentSizes[department] = 0;
        