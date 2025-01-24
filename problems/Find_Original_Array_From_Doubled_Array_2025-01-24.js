
function findOriginalArray(changed) {
    if (changed.length % 2 !== 0) return []; // If the length is odd, return empty array

    const count = new Map();
    const original = [];

    