
function isValidTweet(tweet) {
    const maxLength = 280;
    const inappropriateWords = ["spam", "fake", "scam"]; // Example inappropriate words

    // Check length
    if (tweet.length > maxLength) {
        return false;
    }

    // Check for inappropriate words
    for (let word of inappropriateWords) {
        