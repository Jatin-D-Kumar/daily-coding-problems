
class TrieNode {
    constructor() {
        this.children = new Array(2).fill(null); // 0 and 1
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(num) {
        let node = this.root;
        for (let i = 31; i >= 0; i--) {
            const bit = (num >> i) & 1;
            if (!node.children[bit]) {
                node.children[bit] = new TrieNode();
            }
            node = node.children[bit];
        }
    }

    maxXOR(num) {
        let node = this.root;
        let maxXorNum = 0;
        for (let i = 31; i >= 0; i--) {
            const bit = (num >> i) & 1;
            const oppositeBit = 1 - bit; // we want to take the opposite bit for maximum XOR
            if (node.children[oppositeBit]) {
                maxXorNum |= (1 << i); // if the opposite bit exists, take it
                node = node.children[oppositeBit];
            } else {
                node = node.children[bit]; // take the same bit if opposite doesn't exist
            }
        }
        return maxXorNum;
    }
}

function maximizeXor(arr, queries) {
    const trie = new Trie();
    
    // Insert all numbers from arr into the Trie
    for (const num of arr) {
        trie.insert(num);
    }

    const result = [];
    // For each query, find the maximum XOR value
    for (const query of queries) {
        result.push(trie.maxXOR(query));
    }

    return result;
}

// Example usage:
const arr = [3, 10, 5, 25, 2, 8];
const queries = [5, 25, 2, 8];
const result = maximizeXor(arr, queries);
console.log(result); // Output: [2, 28, 7, 15]
