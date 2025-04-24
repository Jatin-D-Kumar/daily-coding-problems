
class Job {
    constructor(id, deadline, profit) {
        this.id = id;
        this.deadline = deadline;
        this.profit = profit;
    }
}

function scheduleJobs(jobs) {
    // Sort jobs based on prof