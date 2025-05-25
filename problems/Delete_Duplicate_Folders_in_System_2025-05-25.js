
const fs = require('fs');
const path = require('path');

function deleteDuplicateFolders(root) {
    const map = new Map();

    function getFolderKey(folderPath) {
        const files = fs.readdirSync(folderPath).map(file => {
            const filePath = path.join(folderPath, file);
            return fs.statSync(filePath).isDirectory() ? getFolderKey(filePath) : file;
        }).sort(); // Sort to ensure order doesn't affect comparison

        return JSON.stringify(files); // Use a string representation of the folder content
    }

    fun