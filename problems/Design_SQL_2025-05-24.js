
class Table {
    constructor(name) {
        this.name = name;
        this.data = [];
    }

    insert(row) {
        this.data.push(row);
    }

    select(columns) {
        if (columns === '*') {
            return this.data;
        }
        return this.data.map(row => {
            let selectedRow = {};
            for (let col of columns) {
                selectedRow[col] = row[col];
            }
            return selectedRow;
        });
    }

    update(whereClause, setClause) {
        for (let row of this.data) {
            let match = true;
            for (let key in whereClause) {
                if (row[key] !== whereClause[key]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                for (let key in setClause) {
                    row[key] = setClause[key];
                }
            }
        }
    }

    delete(whereClause) {
        this.data = this.data.filter(row => {
            let match = false;
            for (let key in whereClause) {
                if (row[key] === whereClause[key]) {
                    match = true;
                    break;
                }
            }
            return !match; // Remove if it matches
        });
    }
}

class Database {
    constructor() {
        this.tables = {};
    }

    createTable(tableName) {
        if (!this.tables[tableName]) {
            th