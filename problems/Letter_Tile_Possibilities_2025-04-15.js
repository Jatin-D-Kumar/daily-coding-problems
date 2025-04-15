
function numTilePossibilities(tiles) {
    const results = new Set();

    function backtrack(path, used) {
        // Add the current combination to the set
        if (path.length > 0) {
            results.add(path);
        }

        for (let i = 0; i < tiles.length; i++) {
            if (used[i]) continue; // Skip if already used
            used[i] = true; // Mark as used
            backtrack(path + tiles[i], used); // Recur with the current letter added
            used[i] = false; // Backtrack
        }
    }

    backtrack('', Array(tiles.length).fill(false));
    return results.size; // Return the number