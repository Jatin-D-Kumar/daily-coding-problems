
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

    function traverseAndDelete(folderPath) {
        const key = getFolderKey(folderPath);
        
        if (map.has(key)) {
            // Duplicate found, we can remove this folder
            console.log(`Removing duplicate folder: ${folderPath}`);
            fs.rmdirSync(folderPath, { recursive: true });
        } else {
            // Store the key and proceed
            map.set(key, folderPath);
            const items = fs.readdirSync(folderPath);

            for (const item of items) {
                const itemPath = path.join(folderPat