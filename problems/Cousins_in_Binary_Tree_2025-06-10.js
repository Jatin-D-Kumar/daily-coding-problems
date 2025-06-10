
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    let xParent = null;
    let yParent = null;
    let xDepth = -1;
    let yDepth = -1;

    function dfs(node, parent, depth) {
        if (!node) {
            return;
        }

        if (node.val === x) {
            xParent = parent;