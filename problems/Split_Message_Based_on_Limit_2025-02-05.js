
function splitMessage(message, limit) {
    // Initialize an array to hold the split messages
    const messages = [];
    
    // Check if the message length is less than or equal to the limit
    if (message.length <= limit) {
        me