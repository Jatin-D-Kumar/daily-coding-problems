
function canAttendMeetings(intervals) {
    // If there are no meetings, return true
    if (intervals.length === 0) {
        return true;
    }

    // Sort the intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);

    // Check for overlaps
    for (let i = 1; i < intervals.length; i++) {
        // If the start time of the current meeting is less than the end time of the previous meeting, there is an overlap
        if (intervals[i][0] < intervals[i - 1][1]) {
            return false;
        }
    }

    // If no overlaps were found, return true
    return true;
}

// Example usage:
const meetings = [[0, 30], [5, 10], [15, 20]];
console.log(canAttendMeetings(meetings)); // Output: false

const meetings2 = [[7, 10], [2, 4]];
console.log(canAttendMeetings(meetings2)); // Output: true
