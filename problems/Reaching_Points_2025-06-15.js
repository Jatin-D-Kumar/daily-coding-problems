
function canReach(sx, sy, tx, ty) {
    while (tx >= sx && ty >= sy) {
        // If tx is greater than ty, reduce tx
        if (tx > ty) {
            // Use modulo to reduce tx efficiently
            if (ty > sy) {
                tx %= ty;
            } else {
                // If ty is at or below sy, we can only keep moving to (sx, sy)
                ret