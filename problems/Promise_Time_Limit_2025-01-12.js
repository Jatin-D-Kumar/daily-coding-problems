
function promiseWithTimeout(promise, timeLimit) {
    return new Promise((resolve, reject) => {
        // Create a timeout that rejects the promise after the time limit
        const timeoutId = setTimeout(() => {
            reject(new Error('Promise timed out'));
        }, timeLimit);

        // Execute the original promise
        promise
            .then((result) => {
                clearTimeout(timeoutId); // Clear the timeout if the promise resolves
                resolve(result);
            })
            .catch((error) => {
                clearTimeout(timeoutId); // Clear the timeout if the promise rejects
                reject(error);
            });
    });
}

// Example usage:
const examplePromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Success!');
    }, 2000); // This promise resolves after 2 seconds
});

promiseWithTimeout(examplePromise, 1000) // Set a time limit of 1 second
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error.message); // This will log "Promise timed out"
    });
