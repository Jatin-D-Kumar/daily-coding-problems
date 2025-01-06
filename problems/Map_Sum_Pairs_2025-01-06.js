
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
   