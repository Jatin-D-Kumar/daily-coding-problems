
function managerOfLargestDepartment(employees) {
    const departmentSizes = {};
    const departmentManagers = {};

    // Loop through given employees to populate our objects
    for (const employee of 