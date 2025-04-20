
function cancellable(fn, t) {
    // Schedule the function to run after 't' milliseconds
    const timeoutId = setTimeout(fn, t);

    // Return a function that can be used to cancel the timeout
    return function cancel() {
        clearTimeout(timeoutId);
    };
}

// Example usage:
function myFunction() {
    console.log("Function executed!");
}

// Schedule the function to run after 2000 milliseconds (2 seconds)
const cancelTimeout = cancellable(myFunction, 2000);

// To cancel the timeout, call the returned function
// cancelTimeout(); // Uncommenting this line will cancel the timeout
