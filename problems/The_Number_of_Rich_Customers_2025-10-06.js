
//  The Number of Rich Customers
//  compatible with Node.js / ECMAScript 2021

'use strict';
const fs = require('fs');

// read entire input, split by whitespace, convert to numbers
const data = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
if (data.length === 0) process.exit(0);

const n = data[0]