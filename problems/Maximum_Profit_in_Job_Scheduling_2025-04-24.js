
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
    for (let i = 0; i < n; i++) {
        // Find a free slot for this job (We traverse the slots backward)
        for (let j = Math.min(n, jobs[i].deadline) - 1; j >= 0; j--) {
            if (!slot[j]) {
   