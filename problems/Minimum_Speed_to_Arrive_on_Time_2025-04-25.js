
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
    
    // Binary search to find the minimum speed
    let result = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (canArriveOnTime(mid)) {
            result = mid;
            right = mid - 1;  // Try to find a smaller speed
        } else {
            left = mid + 1;  // Increase speed
        }
    }

    return result;
}

// Example usage
const distances = [1, 3, 2];
const hour = 6;
console.log(minSpeedOnTime(distances, hour));  // Output: Minimum speed to arrive on time
