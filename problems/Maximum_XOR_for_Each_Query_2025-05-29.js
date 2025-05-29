
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
                node = node.children[opposite