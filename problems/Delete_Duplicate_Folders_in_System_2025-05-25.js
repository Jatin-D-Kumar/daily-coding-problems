
const fs = require('fs');
const path = require('path');

function deleteDuplicateFolders(root) {
    const map = new Map();

    function getFolderKey(folderPath) {
        const files = fs.readdirSync(folderPath).map(file => {
            const filePath = path.join(folderP