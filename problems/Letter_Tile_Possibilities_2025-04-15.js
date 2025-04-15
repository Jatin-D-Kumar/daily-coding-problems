
function numTilePossibilities(tiles) {
    const results = new Set();

    function backtrack(path, used) {
        // Add the current combination to the set
        if (path.length > 0) {
            results.add(path);
        }

        for (let i