
function getObjectDifferences(obj1, obj2) {
    const differences = {};

    // Check properties in obj1
    for (const key in obj1) {
        if (obj1.hasOwnProperty(key)) {
            if (!obj2.hasOwnProperty(key)) {
                // Property is only in obj1
                differences[key] = { valueInObj1: obj1[key], valueInObj2: undefined };
            } else if (obj1[key] !== obj2[key]) {
                // Property is in both but values are different
                differences[key] = { valueInObj1: obj1[key], valueInObj2: obj2[key] };
            }
        }
    }

    // Check properties in obj2
    for (const key in obj2) {
        if (obj2.hasOwnProperty(key) && !obj1.hasOwnProperty(key)) {
            // Property is only in obj2
            differences[key] = { valueInObj1: undefined, valueInObj2: obj2[key] };
        }
    }

    return differences;
}

// Example usage:
const obj1 = {
    name: "Alice",
    age: 25,
    city: "New York"
};

const obj2 = {
    name: "Alice",
    age: 30,
    country: "USA"
};

const result = getObjectDifferences(obj1, obj2);
console.log(result);
