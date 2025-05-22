
function solveNQueens(n) {
    const results = [];
    const board = Array.from({ length: n }, () => Array(n).fill('.'));

    const isS