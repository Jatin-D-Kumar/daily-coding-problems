
function promiseWithTimeout(promise, timeLimit) {
    return new Promise((resolve, reject) => {
        // Create a timeout that rejects the promise after the time limit
        const timeoutId = setTimeout(() => {
            reject(new Error('Promise timed out'));
        }, timeLimit);

        // Execute the original promise
        promise
            .then((res