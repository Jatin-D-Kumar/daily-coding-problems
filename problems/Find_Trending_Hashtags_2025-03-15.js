
function findTrendingHashtags(hashtags, topN) {
    // Create an object to store the count of each hashtag
    const hashtagCounts = {};

    // Count occurrences of each hashtag
    for (const hashtag of hashtags) {
     