
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
            return { sorted: arr, inversions: 0 };
        }

        const mid = Math.floor(arr.length / 2);
        const leftResult = mergeSortAndCount(arr.slice(0, mid));
        const rightResult = mergeSortAndCount(arr.slice(mid));

        const mergedResult = mergeAndCount(leftResult.sorted, rightResult.sorted);
        return {
            sorted: mergedResult.merged,
            inversions: leftResult.inversions + rightResult.inversions + mergedResult.inversions
        };
    }

    const result = mergeSortAndCount(arr);
    return result.inversions;
}

// Example usage:
const arr = [2, 3, 8, 6, 1];
const inversionCount = countInversions(arr);
console.log(`Number of inversions: ${inversionCount}`); // Output: Number of inversions: 5
