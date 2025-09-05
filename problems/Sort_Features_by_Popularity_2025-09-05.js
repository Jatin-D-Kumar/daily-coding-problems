
// Sample data: an array of feature objects
const features = [
    { name: "Feature A", popularity: 150 },
    { name: "Feature B", popularity: 300 },
    { name: "Feature C", popularity: 200 },
    { name: "Feature D", popularity: 50 },
];

// Function to sort features by popularity in descending order
function sortFeaturesByPopularity(features) {
    return features.sort((a, b) => b.popularity - a.popularity);
}

// Using the function to sort the features
const sortedFeatures = sortFeaturesByPopularity(features);

// Output the sorted features
console.log(sortedFeatures);
