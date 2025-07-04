
function closestRoom(rooms, queries) {
    const results = new Array(queries.length).fill(-1);
    const sortedQueries = queries.map((q, index) => ({ ...q, index })).sort((a, b) => b.minArea - a.minArea);
    const sortedRooms = rooms.map((room, index) => ({ ...room, index })).sort((a, b) => b.width * b.height - a.width * a.height);
    
    const availableRooms = new Set();
    let roomIndex = 0;

    for (const query of sortedQueries) {
        const { minArea, index } = query;

        // Add rooms that meet the area requirement
        while (roomIndex < sortedRooms.length && (sortedRooms[roomIndex].width * sortedRooms[roomIndex].height) >= minArea) {
            availableRooms.add(sortedRooms[roomIndex].index);
            roomIndex++;
        }

        // Find the closest room
        if (availableRooms.size > 0) {
            results[index] = Math.max(...Array.from(availableRooms));
        }
    }

    return results;
}

// Example usage:
const rooms = [[2, 3], [3, 4], [5, 6]];
const