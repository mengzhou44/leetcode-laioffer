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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {

    let map = new Map()

    dfs(root)


    let res = []
    for (let key of map.keys()) {
        if (map.get(key).length > 1) {
            res.push(map.get(key)[0])
        }
    }

    return res

    function dfs(node) {
        if (node === null) return

        let key = encode(node)

        if (!map.has(key)) {
            map.set(key, [])
        }

        map.get(key).push(node)

        dfs(node.left)
        dfs(node.right)
    }

    function encode(node) {
        if (node === null) return ''

        return `(${node.val},${encode(node.left)}, ${encode(node.right)})`
    }

}
