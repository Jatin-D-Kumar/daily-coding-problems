
function isPrefixOfWord(sentence, searchWord) {
    // Split the sentence into words
    const words = sentence.split(' ');

    // Iterate through each word in the sentence
    for (let i = 0; i < words.length; i++) {
        