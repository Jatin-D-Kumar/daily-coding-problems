
function canReach(sx, sy, tx, ty) {
    while (tx >= sx && ty >= sy) {
        if (tx === sx && ty === sy) {
            return true;
        }
        // If ty > tx, we check if we can reduce ty
        if (t