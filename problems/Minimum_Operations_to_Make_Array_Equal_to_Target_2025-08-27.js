
function minOperations(arr, target) {
    let operations = 0;

    for (let i = 0; i < arr.length; i++) {
        operations += Math.abs(arr[i] - targe