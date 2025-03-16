
class UnionFind {
    constructor(size) {
        this.parent = Array.from({ length: size }, (_, i) => i);
        this.rank = Array(size).fill(1);
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]); // Path compression
        }
        return this.parent[x];
    }

    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        
        if (rootX !== rootY) {
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

function smallestStringWithSwaps(s, pairs) {
    const uf = new UnionFind(s.length);

    // Union the pairs
    for (const [x, y] of pairs) {
        uf.union(x, y);
    }

    // Group characters by their root parent
    const groups = {};
    for (let i = 0; i < s.length; i++) {
        const root = uf.find(i);
        if (!groups[root]) {
            groups[root] = [];
        }
        groups[root].push(i);
    }

    // Create an array to hold the result
    const result = Array.from(s);

    // Sort characters in each group and place them back in the result
    for (const indices of Object.values(groups)) {
        const chars = indices.map(i => s[i]).sort();
        indices.sort((a, b) => a - b); // Sort indices to place characters back in order
        for (let j = 0; j < indices.length; j++) {
            result[indices[j]] = chars[j];
        }
    }

    return result.join('');
}

// Example usage:
const s = "dcab";
const pairs = [[0, 3], [1, 2]];
console.log(smallestStringWithSwaps(s, pairs)); // Output: "abcd"
