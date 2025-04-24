
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
                slot[j] = true;
                result[j] = jobs[i].id; // Store the job id in the result
                break;
            }
        }
    }

    // Filter out the undefined slots and return the scheduled jobs and total profit
    const scheduledJobs = result.filter(job => job !== undefined);
    const totalProfit = scheduledJobs.reduce((total, jobId) => {
        const job = jobs.find(j => j.id === jobId);
        return total + (job ? job.profit : 0);
    }, 0);

    return { scheduledJobs, totalProfit };
}

// Example usage:
const jobs = [
    new Job('a', 2, 100),
    new Job('b', 1, 19),
    new J