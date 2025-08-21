
function swapSalary(employees, nameA, nameB) {
    // Find the indices of the employees by name
    const indexA = employees.findIndex(employee => employee.name === nameA);
    const indexB = employees.findIndex(employee => employee.name === nameB);
    
    // Check if both employees exist
    if (indexA === -1 || indexB === -1) {
        console.log("One or both employees not found.");
        return employees; // return original array if one of them is missing
    }
    
    // Swap their salaries
    const tempSalary = employees[indexA].salary;
    employees[indexA].salary = employees[indexB].salary;
    employees[indexB].salary = tempSalary;
    
    return employees;
}

// Example usage:
l