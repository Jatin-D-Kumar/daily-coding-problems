
function diff(obj1, obj2) {
    const result = {};

    // Helper function to check for differences between two values
    function isObject(value) {
        return value && typeof value === 'object