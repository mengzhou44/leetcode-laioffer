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
var widthOfBinaryTree = function (root) {

    if (root === null) return 0

    let array = [{ node: root, index: 0 }]
    let maxWidth = 0
    let level = 0

    while (array.length > 0) {
        let levelSize = array.length
        let level = []
        let count = 0

        while (count < levelSize) {
            let { node, index } = array.shift()
            level.push(index)

            if (node.left !== null) {
                array.push({ node: node.left, index: 2 * index })
            }

            if (node.right !== null) {
                array.push({ node: node.right, index: 2 * index + 1 })
            }

            count++
        }


        let width = level.length === 1 ? 1 : level[level.length - 1] - level[0] + 1
        maxWidth = Math.max(maxWidth, width)

    }

    return maxWidth

};