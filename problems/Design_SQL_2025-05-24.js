
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

    update(where