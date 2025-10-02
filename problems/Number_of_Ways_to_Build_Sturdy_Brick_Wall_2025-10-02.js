
function numWaysToBuildWall(n, h) {
  // Base case: If the width of the wall is 0, there's 1 way to build it (by doing nothing)
  if (n === 0) return 1;

  // Create a dp array to store the number of ways to fill a width
  const dp = new Array(n + 1).fill(0);

  // Base case: There is 1 way to fill a width of 0 (empty wall)
  dp[0] = 1;

  // Base