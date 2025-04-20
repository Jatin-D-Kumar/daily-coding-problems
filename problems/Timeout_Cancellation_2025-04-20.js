
function cancellable(fn, t) {
    // Schedule the function to run after 't' milliseconds
    const timeoutId = setTimeout(fn, t);

    // Return a function that can be used to cancel the timeout
    return function cancel() {
        clearTimeout(timeoutId);
    };
}

// Example usage:
function myF