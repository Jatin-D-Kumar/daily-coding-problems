
class LogEntry {
    constructor(timestamp, message) {
        this.timestamp = timestamp; // in milliseconds (Date.now())
        this.message = message;
    }
}

class LogStorage {
    constructor() {
        this.logs = [];
    }

    // Method to add a log entry
    addLog(message) {
        const timestamp = Date.now();
        const logEntry = new LogEntry(timestamp, message);
        this.logs.push(logEntry);
    }

    // Method to retrieve logs within a certain time range
    getLogs(startTime, endTime) {
        return this.logs
            .filter(log => log.timestamp >= startTime && log.timestamp <= endTime)
            .map(log => ({ timestamp: log.timestamp, message: log.message }));
    }
}

// Example usage
const logStorage = new LogStorage();
logStorage.addLog("Log entry 1");
logStorage.addLog("Log entry 2");

// Simulate some delay to show different timestamps
setTimeout(() => {
    logStorage.addLog("Log entry 3");

    const start = Date.now() - 10000; // 10 seconds ago
    const end = Date.now(); // now
    const entri