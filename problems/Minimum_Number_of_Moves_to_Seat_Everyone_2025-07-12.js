
function minMovesToSeat(seats, students) {
    // Sort both arrays
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);
    
    let moves 