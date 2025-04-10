
function rearrangeSpaces(text) {
    // Split the text into words
    const words = text.split(' ').filter(word => word.length > 0);
    
    // Count the total number of spaces in the original text
    const totalSpaces = text.length - words.join('').length;
    
    // If there are no words, return an empty string
    if (words.length === 0) {
        return '';
    }
    
    // Calculate the number of spaces to distribute between words
    const spaceBetweenWords = Math.floor(totalSpaces / (words.length - 1));
    const extraSpaces = totalSpaces % (words.length - 1);
    
    // Create the space string
    const spaceString = ' '.repeat(spaceBetweenWords);
    
    // Jo