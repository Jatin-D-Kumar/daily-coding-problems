
'use strict';

/**
 * Read all input from stdin.
 */
const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
let idx = 0;
const n = input[idx++];
const arr = input.slice(idx, idx + n);

/**
 * Find maximum value to know sieve limit.
 */
let maxVal = 0;
for (const v of arr) if (v > maxVal) maxVal = v;

/**
 * 1. Sieve of Eratosthenes up to sqrt(m