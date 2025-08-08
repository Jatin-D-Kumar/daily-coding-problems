
function minTimeToCrossBridge(times) {
    // Sort the times in ascending order
    times.sort((a, b) => a - b);
    
    let total_time = 0;
    const n = times.length;
    
    if (n === 0) return 0; // No one to cross
    if (n === 1) return times[0]; // Only one person
    
    while (n > 3) {
        // Option 1: Two fastest cross, fastest returns, two slowest cross, second fastest returns
        let option1 = times[1] + times[0] + times[n - 1] + times[1];
        
        // Option 2: Two slowest cross, fastest returns, two fastest cross, fastest returns
        let option2 = times[n - 1] + times[n - 2] + 2 * times[0];
        
        total_time += Math.min(