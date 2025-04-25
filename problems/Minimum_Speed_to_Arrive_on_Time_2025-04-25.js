
function minSpeedOnTime(distances, hour) {
    const totalDistance = distances.reduce((sum, distance) => sum + distance, 0);
    
    let left = 1;  // Minimum possible speed
    let right = Math.max(...distances) * (Math.ceil(hour));  // Maximum possible speed

    const canArriveOnTime = (speed) => {
        let timeNeeded = 0;
        
        for (let i = 0; i < distances.length; i++) {
            timeNeeded += Math.ceil(distances[i] / speed);
        }
        return timeNeeded <= hour;
    };
    
    // Bi