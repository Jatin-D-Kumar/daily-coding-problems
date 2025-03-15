
function findTrendingHashtags(hashtags, topN) {
    // Create an object to store the count of each hashtag
    const hashtagCounts = {};

    // Count occurrences of each hashtag
    for (const hashtag of hashtags) {
        if (hashtagCounts[hashtag]) {
            hashtagCounts[hashtag]++;
        } else {
            hashtagCounts[hashtag] = 1;
        }
    }

    // Convert the counts object into an array of entries [hashtag, count]
    const hashtagEntries = Object.entries(hashtagCounts);

    // Sort the array based on count in descending order
    hashtagEntries.sort((a, b) => b[1] - a[1]);

    // Extract the top N trending hashtags
    const trendingHashtags = hashtagEntries.slice(0, topN).map(entry => entry[0]);

    return trendingHashtags;
}

// Example usage:
const hashtags = [
    "#javascript", "#coding", "#javascript", "#webdev", 
    "#coding", "#javascript", "#python", "#webdev", 
    "#coding", "#java", "#python", "#java", "#python"
];

const topN = 3;
const trending = findTrendingHashtags(hashtags, topN);
console.log(trending); // Output: ['#javascript', '#coding', '#python']
