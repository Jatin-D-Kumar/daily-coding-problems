
function minMovesToSeat(seats, students) {
    // Sort both arrays
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);
    
    let moves = 0;
    
    // Calculate the total moves required
    for (let i = 0; i < seats.length; i++) {
        moves += Math.abs(seats[i] - students[i]);
    }
    
    return moves;
}

// Example usage:
const seats = [3, 1, 5];
const students = [2, 7, 4];
console.log(minMovesToSeat(seats, students)); // Output: 4
