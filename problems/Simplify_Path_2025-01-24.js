
function simplifyPath(path) {
    // Split the path by slashes
    const parts = path.split('/');
    const stack = [];

    for (const part of parts) 