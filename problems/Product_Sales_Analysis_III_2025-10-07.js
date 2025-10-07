
//  Product Sales Analysis III
//  ECMAScript 2021 (Node.js)

'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

let idx = 0;
const N = Number(data[idx++]);

// Map<month, Map<product, count>>
const sales = new Map();

for (let i = 0; i < N; i++) {
    const date = data[idx++];          // YYYY-MM-DD
    const product = data[idx++];
    const month = date.slice(0, 7);    // YYYY-MM

    if (!sales.has(month)) sales.set(month, new Map());
    const mp = sales.get(month);
    mp.set(product, (mp.g