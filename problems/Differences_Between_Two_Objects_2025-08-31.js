
function diff(obj1, obj2) {
    const result = {};

    // Helper function to check for differences between two values
    function isObject(value) {
        return value && typeof value === 'object' && !Array.isArray(value);
    }

    // Compare properties of obj1
    for (const key in obj1) {
        if (obj1.hasOwnProperty(key)) {
            if (!obj2.hasOwnProperty(key)) {
               