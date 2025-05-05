
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

// Example usage:
const n = 5;       // Number of children
const start = 2;   // Starting child index
const k = 3;       // Number of passes
const direction = 1; // 1 for clockwise, -1 for counter-clockwise

const result = findBa