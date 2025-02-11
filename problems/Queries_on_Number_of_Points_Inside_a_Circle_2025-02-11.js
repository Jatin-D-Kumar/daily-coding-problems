
function countPoints(points, queries) {
    const results = [];

    for (const [xq, yq, rq] of queries) {
        let count = 0;
        for (const [xp, yp] of points) {
      