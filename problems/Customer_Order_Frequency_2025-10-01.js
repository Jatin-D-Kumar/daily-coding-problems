
/**
 * Customer Order Frequency
 *
 * Input format:
 *  - First line: two integers N K
 *  - Next N lines: a customer id (string or integer)
 *
 * Output format:
 *  - First line: number of customers who ordered more than K times
 *  - Following lines: those customer ids sorted lexicographically
 *
 * Usage:
 *   node solution.js < input.txt
 */

'use strict';
 fs = require('fs');

// ---------- Fast input ----------
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

// ---------- Parsing ----------
let pos = 0;
const N = parseInt(input[pos++], 10);
const K = parseInt(input[pos++], 10);

// ---------- Counting ----------
const freq = new Map();
for (let i = 0; i < N; ++i) {
    const id = input[pos++];
    freq.set(id, (freq.get(id) || 0) + 1);
}

// ---------- Collect frequent customers ----------
const frequent = (const [id