
function canAttendMeetings(intervals) {
    // If there are no meetings, return true
    if (intervals.length === 0) {
        return true;
    }

    // Sort the intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);

    // Check for overlaps
    for (let i = 1; i < intervals.length; i++) {