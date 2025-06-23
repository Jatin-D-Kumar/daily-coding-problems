
class UnionFind {
    constructor(size) {
        this.parent = Array.from({ length: size }, (_, index) => index);
        this.rank = Array(size).fill(0);
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]); // path compression
        }
        return this.parent[x];
    }

    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        
        if (rootX !== rootY) {
            // union by rank
            if (this.rank[rootX] > this.rank[rootY]) {
                this.parent[rootY] = rootX;
            } else if (this.rank[rootX] < this.rank[rootY]) {
                this.parent[rootX] = rootY;
            } else {
                this.parent[rootY] = rootX;
                this.rank[rootX]++;
            }
        }
    }
}

function equationsPossible(equations) {
    const uf = new UnionFind(26); // 26 letters from 'a' to 'z'

    // First pass: union for all equality equations
    for (let eq of equations) {
        if (eq[1] === '=') {
            const u = eq.charCodeAt(0) - 'a'.charCodeAt(0);
            const v = eq.charCodeAt(3) - 'a'.charCodeAt(0);
            uf.union(u, v);
        }
    }

    // Second pass: check for inequality equations
    for (let eq of equations) {
        if (eq[1] === '!') {
            const u = eq.charCodeAt(0) - 'a'.charCodeAt(0);
            const v = eq.charCodeAt(3) - 'a'.charCodeAt(0);
            if (uf.find(u) === uf.find(v)) {
                return false; // contradiction found
            }
        }
    }

    return true; // all equations are satisfiable
}

// Example Usage:
const equations = ["a==b", "b!=a"];
console.log(equationsPossible(equations)); // Output: false

const equations2 = ["b==a", "a==b"];
console.log(equationsPossible(equations2)); // Output: true
