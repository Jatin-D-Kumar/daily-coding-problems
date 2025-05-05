
function findBallHolder(n, start, k, direction) {
  let position = start;

  for (let i = 0; i < k; i++) {
    if (direction === 1) {
      // Clockwise
      position = (position + 1) % n;
    } else {
      // Counter-clockwi