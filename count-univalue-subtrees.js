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
 * @return {number}
 */
var countUnivalSubtrees = function (root) {
    if (root === null) return 0

    let count = 0

    dfs(root)

    return count

    function dfs(cur) {
        if (cur === null) return true

        let isLeftUnivar = dfs(cur.left)
        let isRightUnivar = dfs(cur.right)

        if (isLeftUnivar && isRightUnivar) {
            if ((cur.left === null || cur.val === cur.left.val) &&
                (cur.right === null || cur.val === cur.right.val)) {
                count++
                return true
            }
        }

        return false

    }
};