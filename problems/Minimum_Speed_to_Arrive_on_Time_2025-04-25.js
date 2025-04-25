
function minSpeedOnTime(distances, hour) {
    const totalDistance = distances.reduce((sum, distance) => sum + distance, 0);
    
    let left = 1;  // Minimum possible speed
    let right = Math.max(...distances) * (Math.ceil(hour));  // Maximum possible spe