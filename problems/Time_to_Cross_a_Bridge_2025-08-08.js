
function minTimeToCrossBridge(times) {
    // Sort the times in ascending order
    times.sort((a, b) => a - b);
    
    let total_time = 0;
    const n = times.length;
    
    if (n === 0) return 0; // No one to cross
   