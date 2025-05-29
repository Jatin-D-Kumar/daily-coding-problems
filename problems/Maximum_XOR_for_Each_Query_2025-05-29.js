
class TrieNode {
    constructor() {
        this.children = new Array(2).fill(null); // 0 and 1
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
  