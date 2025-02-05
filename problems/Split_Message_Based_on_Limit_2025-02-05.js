
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

    // Iterate through each word
    for (const word of words) {
        // Check if adding the next word exceeds the limit
        if (currentMessage.length + word.length + 1 <= limit) {
            // If it's not the first word, add a space before adding the word
            if (currentMessage) {
                currentMessage += ' ';
            }
            currentMessage += word;
        } else {
            // If the limit is exceeded, push the current message to the array
          