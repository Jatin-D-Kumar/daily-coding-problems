
function cherryPickup(grid) {
    const n = grid.length;
    const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

    for (let i = n - 1; i >= 0; i--) {
       