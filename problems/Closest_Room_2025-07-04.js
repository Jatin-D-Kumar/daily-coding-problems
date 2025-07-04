
function closestRoom(rooms, queries) {
    const results = new Array(queries.length).fill(-1);
    const sortedQueries = queries.map((q, index) => ({ ...q, index })).sort((a, b) => b.minArea - a.minArea);
    const sortedRooms = rooms.map((room, index