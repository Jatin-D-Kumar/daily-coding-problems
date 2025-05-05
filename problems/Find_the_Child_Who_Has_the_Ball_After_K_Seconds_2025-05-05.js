
function findBallHolder(n, start, k, direction) {
  let position = start;

  for (let i = 0; i < k; i++) {
    if (direction === 1) {
      // Clockwise
      position = (position + 1) % n;
    } else {
      // Counter-clockwise
      position = (position - 1 + n) % n; // + n ensures we don't go negative
    }
  }

  return position;
}

/