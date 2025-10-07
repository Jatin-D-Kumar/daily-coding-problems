
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
    mp.set(product, (mp.get(product) || 0) + 1);
}

const Q = Number(data[idx++]);

// Cache best product per month once it's needed
const best = new Map();   // Map<month, {product: string, count: number}>

const output = [];

for (let qi = 0; qi < Q; qi++) {
    const month = data[idx++];

    if (