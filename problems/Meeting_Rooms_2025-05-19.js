
function canAttendMeetings(intervals) {
    // If there are no meetings, return true
    if (intervals.length === 0) {
        return true;
    }

    // Sort the intervals by start time
    intervals.so