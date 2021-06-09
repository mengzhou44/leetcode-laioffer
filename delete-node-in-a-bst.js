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
 * @param {number} key
 * @return {TreeNode}
 */
 var deleteNode = function(root, key) {
    if  (root === null)  return  null

    if (root.val > key) {
         root.left = deleteNode(root.left, key)
    } else if (root.val < key) {
         root.right = deleteNode(root.right, key)
    } else {

         if (root.left === null && root.right=== null) {
               return null
         }

         if (root.left === null) {
               return root.right
         }

         if (root.right === null) {
               return root.left
         }
         let min = findMinNode(root.right)
         root.val = min.val
         root.right = deleteNode(root.right, min.val)
    }

   return root


   function findMinNode(node) {
        while(node.left!== null) {
            node = node.left
        }
       
       return node
   }
}

