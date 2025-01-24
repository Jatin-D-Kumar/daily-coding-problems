
function simplifyPath(path) {
    // Split the path by slashes
    const parts = path.split('/');
    const stack = [];

    for (const part of parts) {
        if (part === '' || part === '.') {
            // Ignore empty parts and current directory references
            continue;
        } else if 