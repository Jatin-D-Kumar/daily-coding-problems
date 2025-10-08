
// ---------------  Maximum Linear Stock Score  -----------------
//  Compatible with Node.js 16+ (ECMAScript 2021)

'use strict';
const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
let idx = 0;
const T = input[idx++];

function runTestCase() {
    const n = input[idx++];
    const a = new Array(n);
    for (let i = 0; i < n; ++i) a[i] = input[idx++];

    // prefix sums S[0]=0, P[0]=0
    const S = new Array(n + 1);
    const P = new Array(n + 1);
    S[0] = 0;
    P[0] = 0;
    let minX = 0, maxX = 0;
    for (let i = 1; i <= n; ++i) {
        S[i] = S[i - 1] + a[i - 1];
        P[i] = P[i - 1] + a[i - 1] * i;
        if (S[i] < minX) minX = S[i];
        if (S[i] > maxX) maxX = S[i];
    }

    /* ------------  Li Chao Tree for minimum  ----------------- */
    class Line {
        constructor(m, b) { this.m = m; this.b = b; }
        val(x) { return this.m * x + this.b; }
    }
    class Node {
        constructor(m, b, l, r) {
            this.line = new Line(m, b);
            this.l = l; this.r = r;
            this.lef