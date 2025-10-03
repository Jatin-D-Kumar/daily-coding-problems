
/**
 * Coupon Code Validator
 * Author: ChatGPT
 * Date: 2025-10-03
 *
 * Reads coupon codes from stdin, validates each one, and prints 'VALID' or 'INVALID'.
 */

'use strict';

const fs = require('fs');

// Read entire input
const input = fs.readFileSync(0, 'utf8').trim().split(/\r?\n/);

// First line: number of test cases
const t = parseInt(input[0], 10);
const results = [];

// Regular expressions used for validation
const allowedRegex = /^[A-Z0-9]+$/;   // Only uppercase letters and digits
const letterRegex = /[A-Z]/;          // At least one letter
const digitRegex = /[0-9]/;           // At least one digit

for (let i = 1; i <= t; i++) {
    const code = input[i] ? input[i].trim() : '';

    // Rule 1: length between 10 and 20
    if (code.length < 10 || code.length > 20) {
        results.push('INVALID');
        continue;
    }

    // Rule 2: allowed characters only
    if (!allowedRegex.test(code)) {
        results.push('INVALID');
        continue;
    }

    // Rule 3: at least one letter and one digit
    if (!letterRegex.test(code) || !digitRegex.test(code)) {
        results.push('INVALID');
        continue;
    }

    // All rules satisfied
    results.push('VALID');
}

// Output results
console.log(results.join('\n'));
