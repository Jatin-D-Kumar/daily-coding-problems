
function cancellable(fn, t) {
    // Schedule the function to run after 't' milliseconds
    const timeoutId = setTimeout(fn, t);

    // Return a fu