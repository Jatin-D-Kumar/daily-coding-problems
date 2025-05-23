
function rearrangeArray(arr) {
    const positiveArray = [];
    const negativeArray = [];

    // Loop through the array and separate positive and negative numbers
    for (let num of arr) {
        if (num >= 0) {
            positiv