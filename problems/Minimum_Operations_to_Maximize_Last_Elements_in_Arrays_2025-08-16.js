
function minOperationsToMaximizeLastElement(arr, target) {
    const n = arr.length;
    if (n === 0 || arr[n - 1] >= target) {
        return 0; // No operations needed if the last element is alread