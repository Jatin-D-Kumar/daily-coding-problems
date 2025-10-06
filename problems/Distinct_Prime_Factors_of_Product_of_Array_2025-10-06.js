
'use strict';

/**
 * Read all input from stdin.
 */
const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
let idx = 0;
const n = input[idx++];
const