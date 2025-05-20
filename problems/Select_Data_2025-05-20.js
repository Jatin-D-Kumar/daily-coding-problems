
// Sample data: Array of user objects
const users = [
    { id: 1, name: 'Alice', age: 25, gender: 'female' },
    { id: 2, name: 'Bob', age: 30, gender: 'male' },
    { id: 3, name: 'Charlie', age: 35, gender: 'male' },
    { id: 4, name: 'Diana', age: 28, gender: 'female' },
];

// Function to filter users based on criteria
function selectData(users, criteria) {
    return users.filter(user => {
        // Match criteria dynamically
        return Object.keys(criteria).every(key => user[key] === criteria[key]);
    });
}

// Usage example
const criteria = { gender: 'female' }; // Selecting female users
const selectedUsers = selectData(users, criteria);

console.log(selectedUsers);
