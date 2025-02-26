
class MapSum {
    constructor() {
        this.map = new Map();
        this.trie = {};
    }

    insert(key, val) {
        const delta = val - (this.map.get(key) || 0);
        this.map.set(key, val);
        
        let node = this.trie;
        for (const char of key) {
            if (!node[char]) {
                node[char] = { sum: 0 };
            }
            node[char].sum += delta;
            node = node[char];
        }
    }

    sum(prefix) {
        let node = this.trie;
        for (const char of prefix) {
            if (!node[char]) {
                return 0; // No such prefix
            }
            node = node[char];
        }
        return node.sum; // Return the sum of all keys with the given prefix
    }
}

// Example usage:
const mapSum = new MapSum();
mapSum.insert("apple", 3);
console.log(mapSum.sum("ap")); // Output: 3
mapSum.insert("app", 2);
console.log(mapSum.sum("ap")); // Output: 5
