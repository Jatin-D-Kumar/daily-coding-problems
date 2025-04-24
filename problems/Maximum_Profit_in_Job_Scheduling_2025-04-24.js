
class Job {
    constructor(id, deadline, profit) {
        this.id = id;
        this.deadline = deadline;
        this.profit = profit;
    }
}

function scheduleJobs(jobs) {
    // Sort jobs based on profit in descending order
    jobs.sort((a, b) => b.profit - a.profit);

    const n = jobs.length;
    const result = new Array(n);
    const slot = new Array(n).fill(false);

    // Iterate through all jobs
  