
function closestRoom(rooms, queries) {
    const results = new Array(queries.length).fill(-1);
    const sortedQueries = quer