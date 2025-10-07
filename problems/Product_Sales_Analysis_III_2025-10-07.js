
//  Product Sales Analysis III
//  ECMAScript 2021 (Node.js)

'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

let idx = 0;
const N = Number(data[idx++]);

// Map<month, Map<product, count>>
const sales = new Map();

for (