
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
            .map(log => ({ time