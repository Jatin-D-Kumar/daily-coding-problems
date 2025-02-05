
function splitMessage(message, limit) {
    // Initialize an array to hold the split messages
    const messages = [];
    
    // Check if the message length is less than or equal to the limit
    if (message.length <= limit) {
        messages.push(message);
        return messages;
    }

    // Split the message into words
    const words = message.split(' ');

    // Initialize a temporary string to build the current message
    let currentMessage = '';

    // Iterate 