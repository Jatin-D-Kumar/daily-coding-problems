
function numWaysToBuildWall(n, h) {
  // Base case: If the width of the wall is 0, there's 1 way to build it (by doing nothing)
  if (n === 0) return 1;

  // Create a dp arr