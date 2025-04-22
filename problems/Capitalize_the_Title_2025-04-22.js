
function capitalizeTitle(title) {
    // Split the title into words
    const words = title.toLowerCase().split(' ');
    
    // Map through the words and apply capitalization rules
    const capitalizedWords = words.map((word, index) => {
        // Capitalize the first and last word or if the word has more than 2 characters
        if (index === 0 || index === words.length - 1 || word.length > 2) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
        // Return the word as is
        return word;
    });
    
    // Join the capitalized words back into a string
    return capitalizedWords.join(' ');
}

// Example usage:
console.log(capitalizeTitle("hello world from the capitalizer")); //