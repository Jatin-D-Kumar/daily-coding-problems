
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
 * 1. Sieve of Eratosthenes up to sqrt(maxVal).
 */
function sieve(limit) {
    const isPrime = new Uint8Array(limit + 1);
    isPrime.fill(1, 2); // indices 0,1 are not prime
    const primes = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrime[i]) {
            primes.push(i);
            if (i * i <= limit) {
                for (let j = i * i; j <= limit; j += i) isPrime[j] = 0;
            }
        }
    }
    