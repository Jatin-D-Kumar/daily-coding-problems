
function convertDateFormat(dateString) {
    // Check if the input is a valid date string in "YYYY-MM-DD" format
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(dateString)) {
        throw new Error("Invalid date format. Please use 'YYYY-MM-DD'.");
    }

    // Split the date string into an array [YYYY, MM, DD]
    