
function capitalizeTitle(title) {
    // Split the title into words
    const words = title.toLowerCase().split(' ');
    
    // Map through the words and apply capitalization rules
    const capitalizedWords = words.map((word, index) => {
 