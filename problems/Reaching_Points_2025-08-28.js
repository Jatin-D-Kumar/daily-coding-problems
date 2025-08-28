
function canReach(sx, sy, tx, ty) {
    while (tx >= sx && ty >= sy) {
        if (tx === sx && ty === sy) {
            return true;
        }
        // If ty > tx, we check if we can reduce ty
        if (ty > tx) {
            // Move backward: we can subtract sy from ty
            ty -= (ty - sy) >= tx ? Math.floor((ty - sy) / tx) * tx : (ty - sy);
        } else {
            // If tx >= ty, we do similar for tx
            tx -= (tx - sx) >= ty ? Math.floor((tx - sx) / ty) * ty : (tx - sx);
        }
    }
    