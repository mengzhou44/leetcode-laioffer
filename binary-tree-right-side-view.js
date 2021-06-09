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
 * @return {number[]}
 */
var rightSideView = function (root) {

    if (root === null) return []

    let res = []

    let array = [root]

    while (array.length > 0) {
        let levelSize = array.length
        let count = 0
        let right = null
        while (count < levelSize) {
            let node = array.shift()
            right = node.val

            if (node.left !== null) {
                array.push(node.left)
            }

            if (node.right !== null) {
                array.push(node.right)
            }

            count++
        }

        res.push(right)
    }

    return res

}




/**
  DFS
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var rightSideView = function(root) {

    if (root === null)  return []
    let curLevel = -1
    let res=[]

    dfs(root)

    return res

    function dfs(cur, level=0) {
          if (cur === null)  return
          if (level>curLevel)  {
                res.push(cur.val)
                curLevel++
          }

          if (cur.right!==null) {
              dfs(cur.right, level+1)
          }
          if (cur.left!== null) {
               dfs(cur.left, level+1)
          }

    }
}

