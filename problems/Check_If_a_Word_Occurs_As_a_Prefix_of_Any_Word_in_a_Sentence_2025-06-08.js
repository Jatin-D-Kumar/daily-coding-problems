
function isPrefixOfWord(sentence, searchWord) {
    // Split the sentence into words
    const words = sentence.split(' ');

    // Iterate through each word in the sentence
    for (let i = 0; i < words.length; i++) {
        // Check if the current word starts with the searchWord
        if (words[i].startsWith(searchWord)) {
            // Return the position (1-based index