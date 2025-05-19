
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
co