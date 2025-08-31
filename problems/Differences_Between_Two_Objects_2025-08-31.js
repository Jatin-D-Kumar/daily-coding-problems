
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
                // Key exists only in obj1
                result[key] = { status: 'removed', value: obj1[key] };
            } else if (isObject(obj1[key]) && isObject(obj2[key])) {
                // If both values are objects, recursively compare them
                const nestedDiff = diff(obj1[key], obj2[key]);
                if (Object.keys(nestedDiff).length > 0) {
                    result[key] = { status: 'changed', value: nestedDiff };
                }
            } else if (obj1[key] !== obj2[key]) {
                // Key exists in both but values are different
                result[key] =