
function canReach(sx, sy, tx, ty) {
    while (tx >= sx && ty >= sy) {
        // If tx is greater than ty, reduce tx
   