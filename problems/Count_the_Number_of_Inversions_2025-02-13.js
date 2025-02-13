
function countInversions(arr) {
    // Helper function to merge two halves and count inversions
    function mergeAndCount(left, right) {
        let i = 0, j = 0;
        let merged = [];
        let inversions = 0;

        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                merged.push(left[i]);
                i++;
            } else {
                // There are left.length - i inversions, because all remaining elements in left
                // are greater than right[j]
                inversions += left.length - i;
                merged.push(right[j]);
                j++;
            }
        }

        // Add remaining elements
        while (i < left.length) {
            merged.push(left[i]);
            i++;
        }
        while (j < right.length) {
            merged.push(right[j]);
            j++;
        }

        return { merged, inversions };
    }

    // Recursive function to sort the array and count inversions
    function mergeSortAndCount(arr) {
        if (arr.length < 2) {
            return { sor