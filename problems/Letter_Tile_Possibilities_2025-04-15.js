
function numTilePossibilities(tiles) {
    const results = new Set();

    function backtrack(path, used) {
        // Add t