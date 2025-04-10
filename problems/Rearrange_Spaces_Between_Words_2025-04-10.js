
function rearrangeSpaces(text) {
    // Split the text into words
    const words = text.split(' ').filter(word => word.length > 0);
    
    // Count the total number of spaces in the original text
    const totalSpaces = text.length - words.join('').length;
    
    // If there are no words, return an empty string
    if (words.length ==