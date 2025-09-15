
function convertDateFormat(dateString) {
    // Check if the input is a valid date string in "YYYY-MM-DD" format
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(dateString)) {
        throw new Error("Invalid date format. Please use 'YYYY-MM-DD'.");
    }

    // Split the date string into an array [YYYY, MM, DD]
    const parts = dateString.split('-');
    
    // Rearrange to "DD/MM/YYYY" format
    const formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
    
    return formattedDate;
}

// Example usage:
const inputDate = "2023-10-05";
const outputDate = convertDateFormat(inputDate);
console.log(outputDate); // Output: "05/10/2023"
