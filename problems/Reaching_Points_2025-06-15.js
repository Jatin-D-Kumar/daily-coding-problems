
function canReach(sx, sy, tx, ty) {
    while (tx >= sx && ty >= sy) {
        // If tx is greater than ty, reduce tx
        if (tx > ty) {
            // Use modulo to reduce tx efficiently
            if (ty > sy) {
                tx %= ty;
            } else {
                // If ty is at or below sy, we can only keep moving to (sx, sy)
                return (tx - sx) % ty === 0;
            }
        } else {
            // If ty is greater than tx, reduce ty
            if (tx > sx) {
                ty %= tx;
            } else {
                // If tx is at or below sx, we can only keep moving to (sx, sy)
                return (ty - sy) % tx === 0;
            }
        }
    }
    return sx === tx && sy <= ty && (ty - sy) % sx === 0 || 
           sy === ty && sx <= tx && (tx - sx) % sy === 0;
}

// Example usage
console.log(canReach(1, 1, 3, 5)); // true
console.log(canReach(1, 1, 2, 2)); // false
console.log(canReach(1, 1, 5, 3)); // true
