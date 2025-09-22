
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

    // Method to add a log en