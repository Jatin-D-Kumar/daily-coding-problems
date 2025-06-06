
function isValidTweet(tweet) {
    const maxLength = 280;
    const inappropriateWords = ["spam", "fake", "scam"]; // Example inappropriate words

    // Check length
    if (tweet.length > maxLength) {
        return false;
    }

    // Check for inappropriate words
    for (let word of inappropriateWords) {
        if (tweet.toLowerCase().includes(word)) {
            return false;
        }
    }

    return true;
}

// Example usage
const tweets = [
    "This is a valid tweet!",
    "This tweet is too long ........................................................................... (280 characters)",
    "This is a spam message!",
];

tweets.forEach(tweet => {
    console.log(`Tweet: "${tweet}" is valid: ${isValidTweet(tweet)}`);
});
