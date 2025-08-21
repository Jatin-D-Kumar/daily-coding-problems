
function swapSalary(employees, nameA, nameB) {
    // Find the indices of the employees by name
    const indexA = employees.findIndex(employee => employee.name === nameA);
    const indexB = employees.findIndex(employee => employee.name === nameB);
    
    // Check if both employees exist
    if (indexA === -1 || indexB === -1) {
        console.log("One or both employees not found.");
        return employees; // re