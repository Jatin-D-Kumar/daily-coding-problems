
function getObjectDifferences(obj1, obj2) {
    const differences = {};

    // Check properties in obj1
    for (const key in obj1) {
        if (obj1.hasOwnProperty(key)) {
            if (!obj2.hasOwnProperty(key)) {
                // Property