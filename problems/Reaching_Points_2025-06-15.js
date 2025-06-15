
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
    return sx === tx && sy <=